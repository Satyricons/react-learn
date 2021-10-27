import {connect} from "react-redux";
import Users from "./users";
import {changeFolowAC, changeUnFolowAC, setCountPageAC, setUsersAC, setCurrentPageAC} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		countPage: state.usersPage.countPage,
		currentPage: state.usersPage.currentPage,
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
		},
		setCountPage: (countUsers) =>{
			dispatch(setCountPageAC(countUsers))
		},
		setCurrentPage: (currentPage) =>{
			dispatch(setCurrentPageAC(currentPage))
		}
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;