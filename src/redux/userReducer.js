let inicialState = {
	id: "Егор Каменски",
	who: "mambers",
	age: "39"
}

let UserReducer = (state = inicialState, action) => {
	if (action.type === 1) {
	}
	else if (action.type === 2) {
	}
	return state;
}

export default UserReducer;