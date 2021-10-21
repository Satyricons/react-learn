import React from "react";
import userscss from './users.module.css';

const Users = (props) => {

	return (
		<div className={userscss.allspisok}>
			{props.users.map(u => <div key={u.id}>
				{u.id + " " + u.name + " "} {u.follow ? <button onClick={()=>props.changeUnFolow(u.id)}>Вы подписаны</button> :
				<button onClick={()=>props.changeFolow(u.id)}>Подписаться</button>}
			</div>)}
		</div>
	);
}

export default Users;