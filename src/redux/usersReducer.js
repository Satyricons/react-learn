const CHANGE = "CHANGE";
const UN_CHANGE = "UN_CHANGE";
const SET_USERS = "SET_USERS";
const SET_COUNT_PAGE = "SET_COUNT_PAGE";
const SET_CURRENT_PAGE ="SET_CURRENT_PAGE";
const IS_FETCHING = "IS_FETCHING"

let inicialState = {
	users: [],
	countPage: 0,
	currentPage: 1,
	isFetching: true,
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
		case IS_FETCHING:
			return{
				...state,
				isFetching: action.isFetching
			}
		default:
			return state;
	}
}

export const setCountPage = (countUsers) => ({type: SET_COUNT_PAGE, countUsers});
export const changeFollow = (followId) => ({type: CHANGE, followId});
export const changeUnFollow = (followId) => ({type: UN_CHANGE, followId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const changeFetching = (isFetching) => ({type: IS_FETCHING, isFetching})

export default UsersReducer;