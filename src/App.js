import './App.css';
import Spisok from "./components/spisok/spisok";
import {Route} from "react-router-dom";
import BodyContainer from "./components/body/bodyContainer";
import MenuContainer from "./components/menu/menuContainer";
import HeadContainer from "./components/head/headContainer";

const App = () => {
	return (
		<div className="App">
			<MenuContainer />
			<HeadContainer />
			<Route path="/spisok" render={() => <Spisok/>}/>
			<Route path={"/body"} render={() => <BodyContainer/>}/>
		</div>
	);
}

export default App;
