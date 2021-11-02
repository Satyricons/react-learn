const ADD_POST = "ADD_POST";
const UPD_POST_TEXT = "ADD_POST_TEXT";

let inicialState = {
	posts: [
		{id: 1, message: "Здравствуйте.", name: "Егор"},
		{id: 2, message: "Я вас слушаю", name: "Елена"},
		{id: 3, message: "По чем мухоморы продаете?", name: "Егор"}
	],
	newPostText: ""
}

let AddPostReducer = (state = inicialState, action) => {
	if (action.type === ADD_POST) {
		return {
			posts: [...state.posts, {id: state.posts.length + 1, message: state.newPostText, name: "uknown"}],
			newPostText: "",
		};
	} else if (action.type === UPD_POST_TEXT) {
		return {
			...state,
			newPostText: action.post,
		}
	}
	return state;
}

export const addPost = () => ({type: ADD_POST});
export const updatePostText = (text) => ({type: UPD_POST_TEXT, post: text});

export default AddPostReducer;