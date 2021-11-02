import React from "react";
import Body from "./body";
import {addPost, updatePostText} from "../../redux/addPostReducer";
import {setUserName, setUserUrl} from "../../redux/bodyReducer";
import Message from "./message";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import axios from "axios";
import Preloader from "../common/preloader";
import {changeFetching} from "../../redux/usersReducer";

class BodyApiComponent extends React.Component {

	componentDidMount() {
		this.props.changeFetching(true);
		axios.get(`http://localhost:8000/body/?userId=${this.props.match.params.userId}`).then(res => {
			this.props.setUserUrl(res.data.foto);
			this.props.setUserName(res.data.name);
			this.props.changeFetching(false);
		});
	}

	render = () => <div>{this.props.isFetching ? <Preloader/> : <Body {...this.props}/>}</div>}

let mapStateToProps = (state) => {
	return {
		userUrl: state.bodyPage.userUrl,
		userName: state.bodyPage.userName,
		isFetching: state.usersPage.isFetching,
		path: state.bodyPage.path,
		naz: state.bodyPage.naz,
		allMessage: state.messagePage.posts.map((d, i) => <Message key={i} name={state.messagePage.posts[i].message}/>),
		simvol: state.messagePage.newPostText
	}
}

const BodyContainer = connect(mapStateToProps, {
	updatePostText,
	addPost,
	setUserUrl,
	changeFetching,
	setUserName,
})(withRouter(BodyApiComponent))

export default BodyContainer;