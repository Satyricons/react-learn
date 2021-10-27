import React from "react";
import userscss from './users.module.css';
import axios from "axios";


class Users extends React.Component {

	componentDidMount() {
		axios.get(`http://localhost:8000/users?currentPage=${this.props.currentPage}`).then(res => {
			console.log(res.data)
			this.props.setUsers(res.data.users);
			this.props.setCountPage(Math.ceil(res.data.countUsers / 5));

		});

		// axios.post('http://localhost:8000/data/', {id: 99, name: "Чмо", follow: false}).then(res => {
		// 	console.log(res.data);
		// 	this.props.setUsers([res.data]);
		// });
	}

	render = () => {
		let pages = [];
		for (let i = 1; i <= this.props.countPage; i++) {
			pages.push(i);
		}
		return (
			<div className={userscss.allspisok}>

					{pages.map(p => {
						return <button key={p}

						onClick={()=>{
							this.props.setCurrentPage(p);
							axios.get(`http://localhost:8000/users?currentPage=${p}`).then(res => {
								console.log(res.data)
								this.props.setUsers(res.data.users);


							});
							}}

						>{p}</button>
					})}

				{this.props.users.map(u => <div key={u.id}>
					{u.id + " " + u.name + " "} {u.follow ?
					<button onClick={() => {
						axios.put(`http://localhost:8000/users/${u.id}`, {follow: false}).then(res => {
						});
						this.props.changeUnFolow(u.id)
					}}>Отменить подписку</button> :
					<button onClick={() => {
						axios.put(`http://localhost:8000/users/${u.id}`, {follow: true}).then(res => {
							console.log(res.data)
						});
						this.props.changeFolow(u.id)
					}}>Подписаться</button>}
				</div>)}
			</div>
		);
	}
}

export default Users;