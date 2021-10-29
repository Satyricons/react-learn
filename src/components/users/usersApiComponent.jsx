// import React from "react";
//
// import axios from "axios";
// import Users from "./users";
//
// class UsersApiComponent extends React.Component {
//
// 	componentDidMount() {
// 		axios.get(`http://localhost:8000/users?currentPage=${this.props.currentPage}`).then(res => {
// 			console.log(res.data)
// 			this.props.setUsers(res.data.users);
// 			this.props.setCountPage(Math.ceil(res.data.countUsers / 5));
// 		});
//
// 		// axios.post('http://localhost:8000/data/', {id: 99, name: "Чмо", follow: false}).then(res => {
// 		// 	console.log(res.data);
// 		// 	this.props.setUsers([res.data]);
// 		// });
// 	}
//
// 	onClickButtonPage = (p) => {
// 		this.props.setCurrentPage(p);
// 		axios.get(`http://localhost:8000/users?currentPage=${p}`).then(res => this.props.setUsers(res.data.users));
// 	}
//
// 	onClickButtonFollow = (u) => {
// 		axios.put(`http://localhost:8000/users/${u.id}`, {follow: true}).then(res => this.props.changeFolow(u.id));
// 	}
//
// 	onClickButtonUnFollow = (u) => {
// 		axios.put(`http://localhost:8000/users/${u.id}`, {follow: false}).then(res => this.props.changeUnFolow(u.id));
// 	}
//
// 	render = () => <Users
// 			countPage={this.props.countPage}
// 			users={this.props.users}
// 			setCurrentPage={this.props.setCurrentPage}
// 			setUsers={this.props.setUsers}
// 			changeUnFolow={this.props.changeUnFolow}
// 			changeFolow={this.props.changeFolow}
// 			onClickButtonPage={this.onClickButtonPage}
// 			onClickButtonFollow={this.onClickButtonFollow}
// 			onClickButtonUnFollow={this.onClickButtonUnFollow}
// 		/>
//
// }
//
// export default UsersApiComponent;