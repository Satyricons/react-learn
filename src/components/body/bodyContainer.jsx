import React from "react";
import Body from "./body";
import {addPostActionCreator, updatePostTextActionCreator} from "../../redux/addPostReducer";
import Message from "../spisok/Message";

const BodyContainer = (props) => {
	let allMessage = props.messagePage.posts.map((d, i) => <Message key={i}
																	name={props.messagePage.posts[i].message}/>);
	return (

		<Body naz={props.naz} text={props.text} allMessage={allMessage} updatePostTextActionCreator={(text) => {
			props.dispatch(updatePostTextActionCreator(text))
		}} addPostActionCreator={() => {
			props.dispatch(addPostActionCreator())
		}} simvol={props.messagePage.newPostText}/>
	);
}

export default BodyContainer;