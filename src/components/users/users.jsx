import React from "react";
import userscss from './users.module.css';
import axios from "axios";

class Users extends React.Component {


	componentDidMount() {
		axios.get("http://localhost:8000/users").then(res => {
			this.props.setUsers(res.data);
		});
	}

	render = () => {
		return (
			<div className={userscss.allspisok}>
				{this.props.users.map(u => <div key={u.id}>
					{u.id + " " + u.name + " "} {u.follow ?
					<button onClick={() => this.props.changeUnFolow(u.id)}>Вы подписаны</button> :
					<button onClick={() => this.props.changeFolow(u.id)}>Подписаться</button>}
				</div>)}
			</div>
		);
	}
}


export default Users;