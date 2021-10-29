import {connect} from "react-redux";
import {changeFollowAC, changeUnFollowAC, setCountPageAC, setUsersAC, setCurrentPageAC} from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import Users from "./users";

class UsersApiComponent extends React.Component {

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

	onClickButtonPage = (p) => {
		this.props.setCurrentPage(p);
		axios.get(`http://localhost:8000/users?currentPage=${p}`).then(res => this.props.setUsers(res.data.users));
	}

	onClickButtonFollow = (u) => {
		axios.put(`http://localhost:8000/users/${u.id}`, {follow: true}).then(() => this.props.changeFollow(u.id));
	}

	onClickButtonUnFollow = (u) => {
		axios.put(`http://localhost:8000/users/${u.id}`, {follow: false}).then(() => this.props.changeUnFollow(u.id));
	}

	render = () => <Users
		countPage={this.props.countPage}
		users={this.props.users}
		setCurrentPage={this.props.setCurrentPage}
		setUsers={this.props.setUsers}
		changeUnFollow={this.props.changeUnFollow}
		changeFollow={this.props.changeFollow}
		onClickButtonPage={this.onClickButtonPage}
		onClickButtonFollow={this.onClickButtonFollow}
		onClickButtonUnFollow={this.onClickButtonUnFollow}
	/>
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		countPage: state.usersPage.countPage,
		currentPage: state.usersPage.currentPage,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		changeFollow: (followId) => {
			dispatch(changeFollowAC(followId))
		},
		changeUnFollow: (followId) => {
			dispatch(changeUnFollowAC(followId))
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		},
		setCountPage: (countUsers) =>{
			dispatch(setCountPageAC(countUsers))
		},
		setCurrentPage: (currentPage) =>{
			dispatch(setCurrentPageAC(currentPage))
		}
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent)

export default UsersContainer;