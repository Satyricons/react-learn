import UserReducer from "./userReducer";
import AddPostReducer from "./addPostReducer";
import BodyReducer from "./bodyReducer";

const {createStore, combineReducers} = require("redux");
let redusers = combineReducers({bodyPage: BodyReducer, userPage: UserReducer, messagePage: AddPostReducer});
let store = createStore(redusers);

export default store;