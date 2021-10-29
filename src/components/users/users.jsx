import React from "react";
import userscss from "./users.module.css";

const Users = (props) => {
	let pages = [];
	for (let i = 1; i <= props.countPage; i++) {
		pages.push(i);
	}

	return (
		<div className={userscss.allspisok}>
			{pages.map(p => {
				return <button key={p} onClick={() => props.onClickButtonPage(p)}>{p}</button>
			})}
			{props.users.map(u => <div key={u.id}>
				{u.id + " " + u.name + " "} {u.follow ?
				<button onClick={() => props.onClickButtonUnFollow(u)}>Отменить подписку</button> :
				<button onClick={() => props.onClickButtonFollow(u)}>Подписаться</button>}
			</div>)}
		</div>
	);
}

export default Users;