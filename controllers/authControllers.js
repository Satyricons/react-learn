const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const key = require("../config/key");
const {baseURI} = require("../config/key");

module.exports.login = async function (req, res) {
	const candidateName = await User.findOne({email: req.body.email})
	if (candidateName) {
		const passwordResult = bcryptjs.compareSync(req.body.password, candidateName.password);
		if (passwordResult) {
			const token = jwt.sign({
				email: candidateName.email,
				userId: candidateName._id
			}, key.jwt, {expiresIn: 60 * 60})
			res.status(200).json({
				authorizeName: candidateName.name,
				authorizePhoto: baseURI + candidateName.foto,
				authorizeId: candidateName.id,
				authorizeStatus: candidateName.status,
				authorizeToken: `Bearer ${token}`
			})
		} else {
			// res.status(404).json({message: "Пароль не верен"})
			res.json({message: "Пароль не верен"})
		}
	} else {
		// res.status(404).json({message: "Пользователь с такой почтой не найден"})
		res.json({message: "Пользователь с такой почтой не найден"})
	}
}

module.exports.register = async function (req, res) {
//проверка
	const candidate = await User.findOne({email: req.body.email})
	if (candidate) {
		console.log("Есть запись в базе данных: \n" + candidate)
	}
	if (candidate) {
		res.status(409).json({message: "Такой персонаж уже есть"})
	} else {
		console.log("Нужно запись делать")
//процесс записи в БД:
		let user = new User({
			email: req.body.email,
			password: bcryptjs.hashSync(req.body.password, bcryptjs.genSaltSync(10))
		})
		try {
			let countCandidate = await user.collection.count()
			user.id = await countCandidate + 1
			await user.save().then(() => console.log(`Произведена новая запись - ${user}`))
			res.status(201).json({result:true})
		} catch (e) {
			// res.status(404).json({message: "Не удалось создать персонаж. Ошибка: " + e})
			res.json({message: "Не удалось создать персонаж. Ошибка: " + e})
		}
	}
}