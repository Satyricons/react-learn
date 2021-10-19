import HeadReducer from "./headReducer";
import AddPostReducer from "./addPostReducer";
import BodyReducer from "./bodyReducer";
import MenuReducer from "./menuReducer";

const {createStore, combineReducers} = require("redux");

let redusers = combineReducers({
	menuPage: MenuReducer,
	bodyPage: BodyReducer,
	headPage: HeadReducer,
	messagePage: AddPostReducer
});

let store = createStore(redusers);

export default store;