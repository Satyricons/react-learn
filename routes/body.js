const express = require("express")
const bodyRout = express.Router()
const passport = require('passport')
const User = require("../models/user")
const {baseURI} = require("../config/key")

const getAllMessage = (user, parseUser, list = 1) => {
	let messages = []

//список сообщений авторизированного пользователя:
	user.allmessage.map(u => {
		if (u.fromId === parseUser.id) {
			// console.log(u)
			messages.push(u)
		}
	})

//список сообщений выбранного пользователя:
	parseUser.allmessage.map(u => {
		if (u.fromId === user.id) {
			messages.push(u)
		}
	})

//сортировка по времени:
	messages.sort(function (a, b) {
		let c = new Date(a.time)
		let d = new Date(b.time)
		return c - d
	})

//количество прочитанных сообщений:
	let counterLastMessage = 0
	parseUser.follow.forEach(e => {
		if (e.followId === user.id) {
			counterLastMessage = e.counterLastMessage
		}
	})

	let firstNum = messages.length - list * 20
	if (messages.length - list * 20 < 1) firstNum = 0
	let lastNum = messages.length - list * 20 + 20

	return {
		lengthMessages: messages.length,
		allMessages: messages.slice(firstNum, lastNum),
		counterLastMessage: counterLastMessage
	}
}


//тест
bodyRout.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
	console.log("Ответ сервера из роутов: Да. Заголовок:" + req.headers)
	res.send("Ответ сервера из роутов: Да")
})


//получить своего юзера
bodyRout.get('/user', passport.authenticate('jwt', {session: false}), async (req, res) => {
	try {
//распарсить токен
		const parseIdUser = (JSON.parse(atob(req.headers.authorization.split('.')[1]))).userId
		let user = await User.findOne({_id: parseIdUser})

		res.json({
			authorizeName: user.name,
			authorizePhoto: baseURI + user.foto,
			authorizeId: user.id,
			authorizeStatus: user.status,
			authorizeCountFollow: user.follow.length
		})
	} catch (e) {
		res.json(e)
	}
})


//получить список follow юзеров
bodyRout.get('/follow', passport.authenticate('jwt', {session: false}), async (req, res) => {
	try {
		let firstNumber = (+req.query.currentPage - 1) * 5
		let lastNumber = firstNumber + 5
		let newUsers = []

//имя авторизированного юзера
		let parseIdUser = (JSON.parse(atob(req.headers.authorization.split('.')[1]))).userId
		let parseUser = await User.findOne({_id: parseIdUser})

//список id подписчиков (выбор нужного количества их в массиве):
		let arrFollowId = []
		parseUser.follow.map(e => arrFollowId.push(e.followId))
		let users = await User.find({id: arrFollowId.slice(firstNumber, lastNumber)})

//создание нового списка юзеров для отправки клиенту
		users.map(u => {
			return newUsers.push({
				id: u.id,
				photo: baseURI + u.foto,
				name: u.name,
				messages: getAllMessage(u, parseUser)
			})
		})

//отправка клиенту
		res.json({users: newUsers})
//обработка ошибки
	} catch (e) {
		res.json("Ошибка-" + e)
	}
})


//отправить сообщения после запроса от socket.io или после клика (api.getAllMessage)
bodyRout.post('/msg', passport.authenticate('jwt', {session: false}), async (req, res) => {
	let users = await User.find()
	let index = users.findIndex(el => el.id === +req.body.clickId)

//имя авторизированного пользователя:
	let parseIdUser = (JSON.parse(atob(req.headers.authorization.split('.')[1]))).userId
	let parseUser = await User.findOne({_id: parseIdUser})
	let allMessages = getAllMessage(users[index], parseUser, +req.body.list)

// устанавливаем в БД количество сообщений
	if (req.body.isSave) {
		let newFollow = []
		parseUser.follow.map(e => {
			if (e.followId !== users[index].id) {
				newFollow.push(e)
			}
		})
		newFollow.push({
			followId: users[index].id,
			counterLastMessage: allMessages.lengthMessages

		})
		parseUser.follow = newFollow
		parseUser.save()
	}

//отправка клиенту его сообщений
	res.json({
		allMessages: allMessages.allMessages,
		lengthMessages: allMessages.lengthMessages,
		counterLastMessage: allMessages.counterLastMessage
	})
})


// получить список юзеров в строке поиска (api.getSearchUsers)
bodyRout.post('/users', passport.authenticate('jwt', {session: false}), async (req, res) => {
	let searchUsers = req.body.searchUsers
	let users = await User.find()
	let newUsers = []
	users.map(u => {
		if (searchUsers.toLowerCase() === u.name.substring(0, searchUsers.length).toLowerCase()) {
			newUsers.push({
				name: u.name,
				photo: baseURI + u.foto,
				id: u.id
			})
		}
	})
	res.json({newUsers})
})


//загрузка аватарки
bodyRout.post('/ava', passport.authenticate('jwt', {session: false}), async (req, res) => {
	const fs = require('fs');
	let FOLDER_PATH = 'public/uploads/' + req.user.id
//если уже есть папка такого юзера, то удалим:
	if (fs.existsSync(FOLDER_PATH)) {
		let files = fs.readdirSync(FOLDER_PATH)
		files.forEach(element => {
			fs.unlinkSync(FOLDER_PATH + "/" + element);
		})
		fs.rmdirSync(FOLDER_PATH)
	}
//создание папки с именем id
	fs.mkdir('public/uploads/' + req.user.id, err => {
		if (err) throw err; // не удалось создать папку
	})
	req.files.file.mv('public/uploads/' + req.user.id + "/" + req.files.file.name).then(async () => {
		//имя авторизированного пользователя:
		let parseIdUser = (JSON.parse(atob(req.headers.authorization.split('.')[1]))).userId
		let parseUser = await User.findOne({_id: parseIdUser})
		parseUser.foto = '/uploads/' + req.user.id + "/" + req.files.file.name
		parseUser.save()
		res.json({result: true, scr: baseURI + parseUser.foto})
	})
})


//добавить сообщение (api.addMessage)
bodyRout.put('/body/:id', passport.authenticate('jwt', {session: false}), async (req, res) => {
	try {

//найти user
		let users = await User.find()
		let index = users.findIndex(el => el.id === +req.params.id)

//добавим новое сообщение
		users[index].allmessage.push(req.body.message)
		users[index].save()

//имя авторизированного пользователя:
		let parseIdUser = (JSON.parse(atob(req.headers.authorization.split('.')[1]))).userId
		let parseUser = await User.findOne({_id: parseIdUser})

//обновим счетчик последнего сообщения
		let newFollow = []
		parseUser.follow.map(e => {
			if (e.followId !== users[index].id) {
				newFollow.push(e)
			}
			return newFollow
		})
		newFollow.push({
			followId: users[index].id,
			counterLastMessage: getAllMessage(users[index], parseUser).lengthMessages
		})
		parseUser.follow = newFollow
		parseUser.save()

//отправка результата:
		res.json({result: true})
	} catch (e) {
		res.json({message: "Error - " + e})
	}
})


//изменить status
bodyRout.put('/user/:id', passport.authenticate('jwt', {session: false}), async (req, res) => {
	try {
		let users = await User.find()
		let index = users.findIndex(el => el.id === +req.params.id)
		users[index].status = req.body.status
		users[index].save()
		res.json({result: true})
	} catch (e) {
		res.json({message: "Error - " + e})
	}
})


//подписаться или отписаться follow (api.setFollow)
bodyRout.put('/users/:id', passport.authenticate('jwt', {session: false}), async (req, res) => {
	try {
		let users = await User.find()
		let index = users.findIndex(el => el.id === +req.params.id)
		let isParser = true
//имя авторизированного юзера
		let parseIdUser = (JSON.parse(atob(req.headers.authorization.split('.')[1]))).userId
		let parseUser = await User.findOne({_id: parseIdUser})
//проверить, есть ли такой id
		if (req.body.follow) {
			parseUser.follow.map(u => {
				if (u.followId === +req.params.id) {
					isParser = false
				}
			})
//добавить к массиву подписки юзера с указанным id
			if (isParser) {
				parseUser.follow = [...parseUser.follow, {followId: +req.params.id, counterLastMessage: 0}]
				parseUser.save()
			}
		}
//удалить из массива подписки юзера с указанным id
		if (!req.body.follow) {
			let arr = []
			parseUser.follow.map(u => {
				if (u.followId !== +req.params.id) {
					arr.push(u)
				}
			})
			parseUser.follow = arr
			parseUser.save()
		}
//отправляем результат подписки или отписки
		res.json({result: isParser, messages: getAllMessage(users[index], parseUser)})
//обработка ошибки
	} catch (e) {
		res.json({message: "Error - " + e})
	}
})


module.exports = bodyRout