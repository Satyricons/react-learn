import {connect} from "react-redux";
import Users from "./users";
import {changeFolowAC, changeUnFolowAC, setUsersAC} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users
	}
}

let mapDispatchToProps = (dispatch) => {

	return {
		changeFolow: (followId) => {
			dispatch(changeFolowAC(followId))
		},
		changeUnFolow: (followId) => {
			dispatch(changeUnFolowAC(followId))
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		}
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;