const SET_USER_URL = "SET_USER_URL";
const SET_USER_NAME = "SET_USER_NAME"

let inicialState = {
	naz: ["Данные пользователя"],
	userUrl: null,
	userName:""
}

let BodyReducer = (state = inicialState, action) => {

	switch (action.type) {

		case SET_USER_URL:
			return {
				...state,
				userUrl: action.userUrl
			}
		case SET_USER_NAME:
			return {
				...state,
				userName: action.userName
			}

		default:
			return state;
	}
}

export const setUserUrl = (userUrl) => ({type: SET_USER_URL, userUrl});

export const setUserName = (userName) => ({type: SET_USER_NAME, userName});

export default BodyReducer;