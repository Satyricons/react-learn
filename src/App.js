import './App.css';
import {Route} from "react-router-dom";
import BodyContainer from "./components/body/bodyContainer";
import MenuContainer from "./components/menu/menuContainer";
import HeadContainer from "./components/head/headContainer";
import UsersContainer from "./components/users/usersContainer";

const App = () => {
	return (
		<div className="App">
			<MenuContainer/>
			<HeadContainer/>
			<Route path="/spisok" render={() => <UsersContainer/>}/>
			<Route path={"/body"} render={() => <BodyContainer/>}/>
		</div>
	);
}

export default App;
