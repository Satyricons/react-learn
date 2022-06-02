import React, {useRef, useState} from "react"
import headcss from "../head/head.module.css"
import * as api from "../../api/api"

const AuthLogin = (props) => {
	const [modeRegister, setModeRegister] = useState(false)
	let email = useRef();
	let password = useRef();
	let buttonAuth = () => {
		api.getUserAuth(email.current.value, password.current.value).then(data => {
				localStorage.setItem('myToken', data.authorizeToken)
				props.setAuth(data.authorizeName, data.authorizePhoto, data.authorizeId, data.authorizeStatus, data.authorizeCountFollow)
			}
		)
	}
	let buttonRegister = () => {
		api.setUserRegister(email.current.value, password.current.value).then(data => {
			console.log(data)
		})
	}
	return <div>
		{!modeRegister ?
			<div>
				<h1>Авторизация</h1>
				<p>Email:</p>
				<p><input ref={email} type="text"/></p>
				<p>Password:</p>
				<p><input ref={password} type="text"/></p>
				<button onClick={buttonAuth}>Войти</button>
				<p className={headcss.item41}
				   onClick={() => {
					   setModeRegister(true)
				   }}
				>Регистрация </p>
			</div>
			:
			<div>
				<h1>Регистрация</h1>
				<p>E-mail:</p>
				<p><input ref={email} type="text"/></p>
				<p>Password:</p>
				<p><input ref={password} type="text"/></p>
				<button onClick={buttonRegister}>OK</button>
				<p className={headcss.item41}
				   onClick={() => {
					   setModeRegister(false)
				   }}
				>Авторизация </p>
			</div>
		}
	</div>
}

export default AuthLogin