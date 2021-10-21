import {connect} from "react-redux";
import Users from "./users";
import {changeFolow, changeUnFolow} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		changeFolow: (followId) => {
			dispatch(changeFolow(followId))
		},
		changeUnFolow: (followId) => {
			dispatch(changeUnFolow(followId))
		}
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;