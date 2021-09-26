import {NavLink} from "react-router-dom";



const User = (props) =>{
	return(
		<NavLink to={"/spisok/"+props.id}>{props.name}<p /></NavLink>
	);
}

	export default User;