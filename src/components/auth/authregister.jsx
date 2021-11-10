// import React, {useState} from "react"
// import * as api from "../../api/api";
// import headcss from "../head/head.module.css";
//
//
// const Authregister = () => {
// 	const[modeRegister, setModeRegister]=useState(false)
// 	let email = React.createRef()
// 	let password = React.createRef()
// 	let buttonClick = () => {
// 		api.setUserRegister(email.current.value, password.current.value).then(data => {
// 			console.log(data)
// 		})
// 	}
// 	return <div>
//
// 		{!modeRegister?
// 			<div>
// 				<h1>Регистрация</h1>
// 				<p>Email:</p>
// 				<p><input ref={email} type="text"/></p>
// 				<p>Password:</p>
// 				<p><input ref={password} type="text"/></p>
// 					<button onClick={buttonClick}>OK</button>
// 				<p className={headcss.item41}
// 				   onClick={()=>{setModeRegister(true)}}
// 				>Авторизация </p>
// 			</div>
// 			:
// 			<div>
// 				<h1>Авторизация</h1>
// 				<p>Email:</p>
// 				<p><input ref={email} type="text"/></p>
// 				<p>Password:</p>
// 				<p><input ref={password} type="text"/></p>
// 				<button onClick={buttonClick}>Войти</button>
// 				<p className={headcss.item41}
// 				   onClick={() => {
// 					   setModeRegister(true)
// 				   }}
// 				>Регистрация </p>
// 			</div>
// 		}
// 	</div>
// }
//
// export default Authregister