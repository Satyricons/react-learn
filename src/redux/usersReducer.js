import axios from "axios";

const CHANGE = "CHANGE";
const UN_CHANGE = "UN_CHANGE";

let inicialState = {
	users: [
		{id: 1, name: "Egor Kamensky", follow: true},
		{id: 2, name: "Elena", follow: false},
		{id: 3, name: "Nastena", follow: true}
	]
}

let UsersReducer = (state = inicialState, action) => {
	switch (action.type) {
		case CHANGE:
			axios.get("https://geek-jokes.sameerkumar.website/api?format=json").then(response=>{
				console.log(response)
			})
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

		default:
			return state;
	}
}

export const changeFolow = (followId) => ({type: CHANGE, followId: followId});
export const changeUnFolow = (followId) => ({type: UN_CHANGE, followId: followId});

export default UsersReducer;