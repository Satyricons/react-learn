import {connect} from "react-redux";
import {
	changeFollow,
	changeUnFollow,
	setCountPage,
	setUsers,
	setCurrentPage,
	changeFetching
} from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import Users from "./users";
import Preloader from "../common/preloader";

class UsersApiComponent extends React.Component {

	componentDidMount() {
		this.props.changeFetching(true);
		axios.get(`http://localhost:8000/users?currentPage=${this.props.currentPage}`).then(res => {
			this.props.changeFetching(false);
			this.props.setUsers(res.data.users);
			this.props.setCountPage(Math.ceil(res.data.countUsers / 5));
		});
	}

	onClickButtonPage = (p) => {
		this.props.changeFetching(true);
		this.props.setCurrentPage(p);
		axios.get(`http://localhost:8000/users?currentPage=${p}`).then(res => {
			this.props.changeFetching(false);
			this.props.setUsers(res.data.users)
		});
	}

	onClickButtonFollow = (u) => {
		this.props.changeFetching(true);
		axios.put(`http://localhost:8000/users/${u.id}`, {follow: true}).then(() => {
			this.props.changeFetching(false);
			this.props.changeFollow(u.id)
		});
	}

	onClickButtonUnFollow = (u) => {
		this.props.changeFetching(true);
		axios.put(`http://localhost:8000/users/${u.id}`, {follow: false}).then(() => {
			this.props.changeFetching(false);
			this.props.changeUnFollow(u.id)
		});
	}

	render = () =>
		<div>
			{this.props.isFetching ? <Preloader/> : <Users
				currentPage={this.props.currentPage}
				countPage={this.props.countPage}
				users={this.props.users}
				setCurrentPage={this.props.setCurrentPage}
				setUsers={this.props.setUsers}
				changeUnFollow={this.props.changeUnFollow}
				changeFollow={this.props.changeFollow}
				onClickButtonPage={this.onClickButtonPage}
				onClickButtonFollow={this.onClickButtonFollow}
				onClickButtonUnFollow={this.onClickButtonUnFollow}
			/>}
		</div>
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		countPage: state.usersPage.countPage,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
	}
}

const UsersContainer = connect(mapStateToProps, {
	changeFollow,
	changeUnFollow,
	setUsers,
	setCountPage,
	setCurrentPage,
	changeFetching
})(UsersApiComponent)

export default UsersContainer;