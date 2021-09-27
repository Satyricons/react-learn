import prehead from "./prehead.module.css"
import {NavLink} from "react-router-dom";
import preheadcss from "../head/head.module.css";

const PreHead = (props) => {
	return (
		<div className={prehead.allprehead}>
			<ul className={prehead.ul}>
				<li><NavLink className={preheadcss.item41} to={props.path[0]}>Полезная информация</NavLink></li>
				<li><NavLink className={preheadcss.item41} to={props.path[1]}>Умные устройства</NavLink></li>
				<li><NavLink className={preheadcss.item41} to={props.path[2]}>Где купить</NavLink></li>
				<li><NavLink className={preheadcss.item41} to={props.path[3]}>Школа диабета</NavLink></li>
				<li><NavLink className={preheadcss.item41} to={props.path[4]}>Считаем углеводы</NavLink></li>
			</ul>
		</div>
	);
}

export default PreHead;
