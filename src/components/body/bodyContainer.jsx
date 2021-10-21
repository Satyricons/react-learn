import React from "react";
import Body from "./body";
import {addPostActionCreator, updatePostTextActionCreator} from "../../redux/addPostReducer";
import Message from "./message";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
	return {
		path: state.bodyPage.path,
		naz: state.bodyPage.naz,
		text: state.bodyPage.text,
		allMessage: state.messagePage.posts.map((d, i) => <Message key={i} name={state.messagePage.posts[i].message}/>),
		simvol: state.messagePage.newPostText
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		updatePostTextActionCreator: (text) => {
			dispatch(updatePostTextActionCreator(text))
		},
		addPostActionCreator: () => {
			dispatch(addPostActionCreator())
		}
	}
}

const BodyContainer = connect(mapStateToProps, mapDispatchToProps)(Body)

export default BodyContainer;