import React from "react";
import userscss from "./users.module.css";
import {NavLink} from "react-router-dom";

const Users = (props) => {
	let pages = [];
	for (let i = 1; i <= props.countPage; i++) {
		pages.push(i);
	}

	return (
		<div className={userscss.allspisok}>
			{props.users.map(u =>
				<div key={u.id}>
					<NavLink to={"/body/"+u.id}><img alt="" className={userscss.foto} src={u.foto}/></NavLink>
					{u.id + " " + u.name + " "} {u.follow ?
					<button onClick={() => props.onClickButtonUnFollow(u)}>Отменить подписку</button> :
					<button onClick={() => props.onClickButtonFollow(u)}>Подписаться</button>}
				</div>)}
			{pages.map(p => <button className={props.currentPage === p ? userscss.selected : ""} key={p}
									onClick={() => props.onClickButtonPage(p)}>{p}</button>)}
		</div>
	);
}

export default Users;