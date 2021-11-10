import React from "react"
import bodycss from "../body/body.module.css"
import usersCss from "./users.module.css"
import * as api from "../../api/api";
import face from "../head/img/user.png";

export default function UsersMessenger(props) {

	const getTime = (time) => {
		let date = new Date(time)
		let options = {
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "numeric",
			minute: "numeric"
		}
		return date.toLocaleDateString('ru-RU', options)
	}

	return <div className={bodycss.item3}>

{/*скроллинг мессенджера		*/}

		<div className={bodycss.item31}
			 ref={props.el}
			 onScroll={(e) => {
				 if (e.nativeEvent.target.scrollTop === 0) {
					 if (props.countPages >= props.list) {


//добавляем еще 20 сообщений
						 props.setList(prev=>prev+1)
						 api.getAllMessage(props.clickUser, false, props.list + 1).then(data => {
							 if (props.countPages > props.list) {
								 props.users.map(e => {
									 if (e.id === props.clickUser) {
										 e.messages.allMessages = data.allMessages.concat(e.messages.allMessages)
									 }
									 return e
								 })
								 props.el.current.scrollTop = props.el.current.scrollHeight / 4
							 }
						 })
					 }
				 }
			 }}



		>
			{props.countPages < props.list ?
				<p className={usersCss.scroll}>Поздоровайтесь с {props.clickUserName}...</p>
				:
				<p className={usersCss.scroll} onClick={() => {

//добавляем еще 20 сообщений
					props.setList(prev=>prev+1)
					api.getAllMessage(props.clickUser, false, props.list + 1).then(data => {
						if (props.countPages > props.list) {
							props.users.map(e => {
								if (e.id === props.clickUser) {
									e.messages.allMessages = data.allMessages.concat(e.messages.allMessages)
								}
								return e
							})
							props.el.current.scrollTop = props.el.current.scrollHeight / 4
						}
					})

				}}>назад...</p>
			}

			{props.users.map(e => {
				if (e.id === props.clickUser)
					return e.messages.allMessages.map((u, i) =>
						<div key={i}>
							{u.fromId !== props.authorizeId ?
								<div className={usersCss.left}>
									<img className={usersCss.photoMini}
										 src={e.photo}
										 onError={e => {
											 e.target.src = face
											 e.target.onerror = null
										 }}
										 alt=""
									/>
									<span
										className={usersCss.span2}>{getTime(u.time) + " : " + e.name + " - " + u.post}</span>
								</div>
								:
								<div className={usersCss.right}>
									<span className={usersCss.span}>{getTime(u.time) + " : " + u.post}</span>
								</div>
							}
						</div>
					)
				return null
			})
			}


		</div>

		{/*инпут для ввода сообщений:		*/}
		<div>
			<input className={bodycss.textarea}
				   value={props.symbol}
				   onChange={(e) => props.setSymbol(e.target.value)}
				   onKeyDown={(e) => {
					   if (e.code === "Enter") {
						   props.sendMessage(e)

//обновляем в списке юзеров последнее сообщение
						   props.users.map(e => {
							   if (e.id === props.clickUser) {
								   e.messages.lengthMessages++
								   e.messages.counterLastMessage++
								   e.messages.allMessages.push({
									   time: new Date().getTime(),
									   fromId: props.authorizeId,
									   post: props.symbol
								   })
							   }
							   return e
						   })
					   }
				   }}
				   placeholder={"Напишите другу..."}
			/>
		</div>

	</div>
}