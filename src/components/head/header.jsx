import React, {useEffect, useState} from "react"
import headcss from "../head/head.module.css"
import {NavLink} from "react-router-dom"
import logo from "../head/img/logo.png"
import AuthLogin from "../auth/authLogin"
import * as api from "../../api/api"
import face from "../head/img/user.png"
import Users from "../users/users"

const Header = () => {

	const setAuth = (authorizeName, authorizePhoto, authorizeId, authorizeStatus ) => {

		setAuthorizeName(authorizeName)
		setAuthorizePhoto(authorizePhoto)
		setAuthorizeId(authorizeId)
		setAuthorizeStatus(authorizeStatus)

	}

	const [authorizeName, setAuthorizeName] = useState("")
	const [authorizePhoto, setAuthorizePhoto] = useState(face)
	const [modeAuth, setModeAuth] = useState(false)
	const [authorizeId, setAuthorizeId] = useState(undefined)
	const [authorizeStatus, setAuthorizeStatus] = useState("Нет статуса")



	//монтируем компоненту
	useEffect(() => api.getUserMount().then(data => setAuth(
		data.authorizeName,
		data.authorizePhoto,
		data.authorizeId,
		data.authorizeStatus,
		data.authorizeCountFollow,
		data.authorizeCountUsers
		)), [])

	return <div>
		<div className={headcss.allhead}>
			<NavLink className={headcss.item2} to="/users">
				<div>
					<img className={headcss.item1} src={logo} alt="img"/>
				</div>
				<div>
					<p className={headcss.item21}><b>Эндокринология для всех</b></p>
					<p className={headcss.item22}>Барановичская детская городская поликлиника</p>
				</div>
			</NavLink>
			<div>
				<p className={headcss.item3}>225320 г.Барановичи, ул.Куйбышева, 46</p>
				<p className={headcss.item3}>+375 16 342-13-13</p>
			</div>

			<div className={headcss.item4}>
				<div>
					<div className={headcss.item43}>{authorizeName}</div>
					<img className={headcss.item42} src={authorizePhoto} alt="img"/>

					{authorizeId ? <div
							className={headcss.item41}
							onClick={() => {
								setAuth("", face, undefined)
								localStorage.setItem("myToken", "")
							}}>
							Выйти </div>
						:
						<div className={headcss.item41} onClick={() => {
							setModeAuth(!modeAuth)
						}}> Войти </div>
					}

				</div>
			</div>
		</div>

		{authorizeId ? <Users
			authorizePhoto={authorizePhoto}
			setAuthorizePhoto={setAuthorizePhoto}
			authorizeName={authorizeName}
			authorizeStatus={authorizeStatus}
			authorizeId={authorizeId}
		/> : modeAuth ?
			<AuthLogin setAuth={setAuth}
			/> : <></>}

	</div>
}
export default Header