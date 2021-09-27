import prehead from "./prehead.module.css"
import {NavLink} from "react-router-dom";
import preheadcss from "../head/head.module.css";

const PreHead = (props) => {
	return (
		<div className={prehead.allprehead}>
			<ul className={prehead.ul}>
				<li><NavLink className={preheadcss.item41} to={props.path[0]}>{props.nameStat[0]}</NavLink></li>
				<li><NavLink className={preheadcss.item41} to={props.path[1]}>{props.nameStat[1]}</NavLink></li>
				<li><NavLink className={preheadcss.item41} to={props.path[2]}>{props.nameStat[2]}</NavLink></li>
				<li><NavLink className={preheadcss.item41} to={props.path[3]}>{props.nameStat[3]}</NavLink></li>
				<li><NavLink className={preheadcss.item41} to={props.path[4]}>{props.nameStat[4]}</NavLink></li>
			</ul>
		</div>
	);
}
export default PreHead;
