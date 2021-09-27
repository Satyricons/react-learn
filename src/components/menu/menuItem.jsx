import {NavLink} from "react-router-dom";
import menucss from "./menu.module.css";

const MenuItem = (props) => {
	return (
		<li><NavLink className={menucss.item41} to={props.path[props.id]}>{props.naz[props.id]}</NavLink></li>
	);
}

export default MenuItem;