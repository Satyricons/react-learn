import menucss from "./menu.module.css"
import MenuItem from "./menuItem";

const Menu = (props) => {
	let allSpisok = props.path.map((d, i) => <MenuItem key={i} path={props.path} naz={props.naz} id={i}/>);
	return (
		<div className={menucss.allmenu}>
			<ul className={menucss.ul}>
				{allSpisok}
			</ul>
		</div>
	);
}
export default Menu;
