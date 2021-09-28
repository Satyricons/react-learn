import menucss from "./menu.module.css"
import MenuItem from "./menuItem";

const Menu = (props) => {
	let allSpisok = props.bodyPage.path.map((d, i) => <MenuItem key={i} path={props.bodyPage.path} naz={props.bodyPage.naz} id={i}/>);
	return (
		<div className={menucss.allprehead}>
			<ul className={menucss.ul}>
				{allSpisok}
			</ul>
		</div>
	);
}
export default Menu;
