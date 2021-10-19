import {connect} from "react-redux";
import Menu from "./menu";

let mapStateToProps = (state) => {
	return {
		path: state.menuPage.path,
		naz: state.menuPage.naz,
		text: state.menuPage.text
	}
}

const MenuContainer = connect(mapStateToProps)(Menu)

export default MenuContainer;