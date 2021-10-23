import axios from "axios";

const CHANGE = "CHANGE";
const UN_CHANGE = "UN_CHANGE";
const SET_USERS = "SET_USERS";

let inicialState = {

	users: [
		{id: 1, name: "Egor Kamensky", follow: true},
		{id: 2, name: "Elena", follow: false},
		{id: 3, name: "Nastena", follow: true},
		{id: 4, name: "Костян", follow: true}
	]
}

let UsersReducer = (state = inicialState, action) => {

	switch (action.type) {

		case CHANGE:

			// axios.post(`http://localhost:8000/data/`, {id: 7, name: "Fedor", follow: false})
			// 	.then(res => {
			// 		console.log(res);
			// 	})

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

			console.log("Рисую " + state.users.length)
			return {
				...state,
				users: [...state.users, ...action.users],
			}

		default:
			return state;
	}
}

export const changeFolowAC = (followId) => ({type: CHANGE, followId});
export const changeUnFolowAC = (followId) => ({type: UN_CHANGE, followId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default UsersReducer;