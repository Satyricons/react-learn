import React, {useEffect, useRef, useState} from "react"
import usersCss from "./users.module.css"
import {Redirect} from "react-router-dom"
import MyselfUser from "./myselfUser"
import * as api from "../../api/api"
import UsersList from "./usersList"
import UsersMessenger from "./usersMessenger"
import io from "socket.io-client"

const socket = io.connect("http://localhost:8000")

const Users = (props) => {

	const [showFollowMode, setShowFollowMode] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)
	const [users, setUsers] = useState([])
	const [authorizeCountUsers, setAuthorizeCountUsers] = useState(0)
	const [clickUser, setClickUser] = useState(undefined)
	const [symbol, setSymbol] = useState("")
	const [usersConnection, setUsersConnection] = useState([])
	const [countConnections, setCountConnections] = useState(0)
	const [countPages, setCountPages] = useState(0)
	const [clickUserName, setClickUserName] = useState(undefined)
	const [list, setList] = useState(1)
	const [newMsg, setNewMsg] = useState(undefined)
	const el = useRef()


//загрузка аватарки
	const sendImage = (e) => {
		if (e.target.files.length) {
			const formData = new FormData()
			formData.append('file', e.target.files[0])
			api.sendPhoto(formData).then(data => {
				props.setAuthorizePhoto(data.scr)
			})
		}
	}


//отправка сообщения в мессенджере
	const sendMessage = (e) => {
		setSymbol('')
		e.preventDefault()
		api.addMessage(clickUser, {
			time: new Date().getTime(),
			fromId: props.authorizeId,
			post: symbol
		}).then(() => {

//скролл вниз
			if (el) el.current.scrollTop = el.current.scrollHeight

//отправляем на сервер сигнал сообщение
			socket.emit("msgToServer", {toUser: clickUser, fromUser: props.authorizeId, msg: symbol})
		})
	}


//эффект клика юзера
	useEffect(() => {
		if (clickUser !== undefined) {

			setUsers(pre =>
				pre.map(e => {
					if (clickUser === e.id) {
						e.messages.counterLastMessage = e.messages.lengthMessages
						setCountPages(Math.ceil(e.messages.lengthMessages / 20))
						setClickUserName(e.name)
					}
					return e
				})
			)

//скролл вниз
			if (el) el.current.scrollTop = el.current.scrollHeight

//сохраняем счетчик
			api.getAllMessage(clickUser, true).then()
		}
	}, [clickUser])


//получение сообщения и обновления сообщений socket.io
	useEffect(() => {
		socket.on("msgToClient", (data) => {
			if (data.toUser === props.authorizeId) {
				console.log("Вам сообщение")
				console.log(data)

// //обновляем список сообщений, а также в списке юзеров последнее сообщение
				setUsers(pre => pre.map(e => {
					if (e.id === data.fromUser) {
						e.messages.allMessages.push({
							time: new Date().getTime(),
							from: data.fromUser,
							post: data.msg
						})
						e.messages.lengthMessages++
						// e.messages.counterLastMessage = e.messages.lengthMessages
						data.fromUser = undefined
					}
					return e
				}))

// если открыт мессенджер
				if (el.current !== undefined) el.current.scrollTop = el.current.scrollHeight
				setNewMsg(data)
			}
		})
	}, [props.authorizeId])

//принятие сообщения и обработка
	useEffect(() => {
		if (newMsg) {
			users.forEach(e => {
				if (e.id === clickUser) api.getAllMessage(clickUser, true).then()
			})
			setNewMsg(undefined)
		}
	}, [clickUser, newMsg, users])


//количество юзеров (socket io)
	useEffect(() => {
		socket.emit(`iam`, props.authorizeId)
		socket.on('broadcast', function (data) {
			if (data.usersConnect) {
				let newUsersConnect = []
				data.usersConnect.map(e => {
					newUsersConnect.push(e.userId)
					return newUsersConnect
				})
				setUsersConnection(newUsersConnect)
				setCountConnections(data.countConnections)
			}
		})
	}, [props.authorizeId])


//эффект подгрузки юзеров в списке друзей:
	useEffect(() => api.getFollow(1).then(data => {
		setAuthorizeCountUsers(data.users.length)
		setUsers(prev => [...prev, ...data.users])
	}), [])


	if (!(localStorage.getItem("myToken"))) return <Redirect to={"/login/auth"}/>

	return <div className={usersCss.all}>

		{/*личная информация*/}
		<div>
			<MyselfUser
				authorizeName={props.authorizeName}
				authorizePhoto={props.authorizePhoto}
				authorizeStatus={props.authorizeStatus}
				authorizeCountUsers={authorizeCountUsers}
				setShowFollowMode={setShowFollowMode}
				showFollowMode={showFollowMode}
				usersConnection={usersConnection}
				countConnections={countConnections}
				sendImage={sendImage}

			/></div>

		{/*список подписчиков*/}
		{showFollowMode ?
			<UsersList
				users={users}
				setUsers={setUsers}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				setAuthorizeCountUsers={setAuthorizeCountUsers}
				authorizeCountUsers={authorizeCountUsers}
				clickUser={clickUser}
				setClickUser={setClickUser}
				usersConnection={usersConnection}
				authorizeId={props.authorizeId}
				setList={setList}
			/>
			:
			<></>}

		{/*мессенжер*/}
		{clickUser !== undefined && showFollowMode ?
			<UsersMessenger
				users={users}
				clickUser={clickUser}
				countPages={countPages}
				authorizeName={props.authorizeName}
				authorizeId={props.authorizeId}
				sendMessage={sendMessage}
				symbol={symbol}
				setSymbol={setSymbol}
				list={list}
				setList={setList}
				el={el}
				clickUserName={clickUserName}
			/>
			:
			<></>
		}

	</div>
}

export default Users