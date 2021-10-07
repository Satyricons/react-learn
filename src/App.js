import './App.css';
import Menu from "./components/menu/menu";
import Head from "./components/head/head";

import Spisok from "./components/spisok/spisok";
import {Route} from "react-router-dom";
import BodyContainer from "./components/body/bodyContainer";

const App = (props) => {
	let bodyPage = props.state.bodyPage;
	let userPage = props.state.userPage;
	let messagePage = props.state.messagePage;
	let allSpisok = bodyPage.naz.map((d, i) => <Route key={i} path={bodyPage.path[i]}><BodyContainer key={i}
																							naz={bodyPage.naz[i]}
																							text={bodyPage.text[i]}
																							dispatch={props.dispatch}
																							messagePage={messagePage}
	/></Route>);
	return (
		<div className="App">
			<Menu bodyPage={bodyPage}/>
			<Head userPage={userPage}><title>Диа</title></Head>
			<Route path="/spisok" component={Spisok}/>
			{allSpisok}
		</div>
	);
}

export default App;
