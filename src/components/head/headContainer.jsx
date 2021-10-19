import {connect} from "react-redux";
import Head from "./head";

let mapStateToProps = (state) => {
	return {
		id: state.headPage.id,
		who: state.headPage.who,
		age: state.headPage.age
	}
}

const HeadContainer = connect(mapStateToProps)(Head)

export default HeadContainer;