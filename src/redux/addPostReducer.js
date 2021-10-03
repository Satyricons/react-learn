const ADD_POST = "ADD_POST";
const UPD_POST_TEXT = "ADD_POST_TEXT";

let AddPostReducer = (state, action) => {
	if (action.type === ADD_POST) {
		let newPost = {
			id: state.messagePage.posts.length + 1,
			message: state.messagePage.newPostText
		};
		state.messagePage.posts.push(newPost);
		state.messagePage.newPostText = '';

	} else if (action.type === UPD_POST_TEXT) {
		state.messagePage.newPostText = action.post;

	}
	return state;
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updatePostTextActionCreator = (text) => ({type: UPD_POST_TEXT, post: text})
export default AddPostReducer;