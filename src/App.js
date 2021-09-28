import './App.css';
import Menu from "./components/menu/menu";
import Head from "./components/head/head";
import Body from "./components/body/body";
import Spisok from "./components/spisok/spisok";
import {Route} from "react-router-dom";

function App(props) {
	let bodyPage = props.state.bodyPage;
	let userPage = props.state.userPage;
	let allSpisok = bodyPage.naz.map((d, i) => <Route key={i} path={bodyPage.path[i]}><Body key={i} naz={bodyPage.naz[i]}
																					text={bodyPage.text[i]}/></Route>);
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
