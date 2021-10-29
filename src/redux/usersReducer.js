const CHANGE = "CHANGE";
const UN_CHANGE = "UN_CHANGE";
const SET_USERS = "SET_USERS";
const SET_COUNT_PAGE = "SET_COUNT_PAGE";
const SET_CURRENT_PAGE ="SET_CURRENT_PAGE";

let inicialState = {
	users: [],
	countPage: 0,
	currentPage: 1,
}

let UsersReducer = (state = inicialState, action) => {

	switch (action.type) {
		case CHANGE:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.followId) {
						return {...u, follow: true}
					}
					return u;
				})
			}
		case UN_CHANGE:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.followId) {

						return {...u, follow: false}
					}
					return u;
				})
			}
		case SET_USERS:
			return {
				...state,
				users: action.users
			}
		case SET_COUNT_PAGE:
			return{
				...state,
				countPage: action.countUsers
			}
		case SET_CURRENT_PAGE:
			return{
				...state,
				currentPage: action.currentPage
			}
		default:
			return state;
	}
}
export const setCountPageAC = (countUsers) => ({type: SET_COUNT_PAGE, countUsers});
export const changeFollowAC = (followId) => ({type: CHANGE, followId});
export const changeUnFollowAC = (followId) => ({type: UN_CHANGE, followId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})

export default UsersReducer;