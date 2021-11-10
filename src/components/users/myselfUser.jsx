import React, {useState} from "react"
import bodycss from "../body/body.module.css";
import face from "../head/img/user.png"

const MyselfUser = (props) => {

	const [showMode, setShowMode] = useState(false)

	return <>
		<div><b>{props.authorizeName}</b></div>
		<div className={bodycss.container}>
			<img onMouseEnter={() => setShowMode(true)}
				 onMouseLeave={() => setShowMode(false)}
				 className={bodycss.img}
				 src={props.authorizePhoto}
				 onError={e => {
					 e.target.src = face
					 e.target.onerror = null
				 }}
				 alt="img"
			/>
			{showMode ? <input className={bodycss.input}
							   onMouseEnter={() => setShowMode(true)}
							   onMouseLeave={() => setShowMode(false)}
							   type={'file'}
							   onChange={props.sendImage}/>
				:
				<></>}
		</div>
		<div>{props.authorizeStatus}</div>
		<hr/>
		<div>Всего в сети: {props.countConnections}</div>
		<div onClick={() => props.setShowFollowMode(!props.showFollowMode)}>
			{props.authorizeCountUsers > 0 ? "Друзья: " + props.authorizeCountUsers : ""}</div>
	</>
}

export default MyselfUser