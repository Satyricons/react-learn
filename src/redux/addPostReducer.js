const ADD_POST = "ADD_POST";
const UPD_POST_TEXT = "ADD_POST_TEXT";

let inicialState = {posts: [
		{id: 1, message: "Здравствуйте.", name: "Егор"},
		{id: 2, message: "Я вас слушаю", name: "Елена"},
		{id: 3, message: "По чем мухоморы продаете?", name: "Егор"}
	], newPostText: ""}

let AddPostReducer = (state = inicialState, action) => {

	if (action.type === ADD_POST) {
		console.log("Произведена запись нового сообщения")

		let newPost = {
			id: state.posts.length + 1,
			message: state.newPostText,
			name: "uknown"
		};
		state.posts.push(newPost);
		state.newPostText = '';

	} else if (action.type === UPD_POST_TEXT) {
		console.log(action.type === UPD_POST_TEXT)
		state.newPostText = action.post;
console.log(state.newPostText)
	}
	return state;
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostTextActionCreator = (text) => ({type: UPD_POST_TEXT, post: text});
export default AddPostReducer;