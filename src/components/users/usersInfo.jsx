// import React from "react";
// import bodycss from "../body/body.module.css";
// import qee from "./userimg/qee.png";
//
//
// const UsersInfo = (props) => {
//
// 	return <div>
// 			<div className={bodycss.textbody}>
// 				<div className={bodycss.item2}>
// 					<b>{props.name}</b>
// 					<div>
// 						<img className={bodycss.img} src={props.urlUser} alt=""/>
//
// 						{/*изменить статус*/}
// 						<div>{
// 							props.name === props.authorizeName ?
// 								props.modeEdit === 0 ? <div onClick={() => props.setModeEdit(1)}>{props.status}</div> :
// 									<input
// 										onBlur={() => props.setModeEdit(0)}
// 										onChange={props.onStatusChange}
// 										autoFocus={true}
// 										ref={props.statusRef}
// 										value={props.status}/>
// 								:
// 								<div>{props.status}</div>}
// 						</div>
// 					</div>
// 					<div className={bodycss.item22}>
//
// 						<hr/>
// 						<p>Инсулин 1: Левемир (выдан: 20.08.2021, 2 шт.)</p>
// 						<p>Инсулин 2: Новорапид (выдан: 20.08.2021, 1 шт.)</p>
// 						<p>На прием к врачу: 30.09.2021</p>
// 						<hr/>
// 						<img className={bodycss.img2} src={qee} alt="img"/>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// }
// export default UsersInfo