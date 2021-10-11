import './App.css';
import Menu from "./components/menu/menu";
import Head from "./components/head/head";
import Spisok from "./components/spisok/spisok";
import {Route} from "react-router-dom";
import BodyContainer from "./components/body/bodyContainer";
import store from "./redux/store";

const App = () => {
	let bodyPage = store.getState().bodyPage;
	let userPage = store.getState().userPage;

	// let allSpisok = bodyPage.naz.map((d, i) => <Route key={i} path={bodyPage.path[i]}><BodyContainer key={i}
	// 																						naz={bodyPage.naz[i]}
	// 																						text={bodyPage.text[i]}
	// 																						dispatch={props.dispatch}
	// 																						messagePage={props.state.messagePage}
	// /></Route>);
	return (
		<div className="App">
			<Menu bodyPage={bodyPage}/>
			<Head userPage={userPage}><title>Диа</title></Head>
			<Route path="/spisok" component={Spisok}/>
			{/*{allSpisok}*/}

			{/*<Route path={bodyPage.path[0]}><BodyContainer naz={bodyPage.naz[0]} text={bodyPage.text[0]}*/}
			{/*											  dispatch={props.dispatch}*/}
			{/*											  messagePage={props.state.messagePage}/>*/}
			{/*</Route>*/}


			<Route path={bodyPage.path[0]}>
				<BodyContainer />
			</Route>

		</div>
	);
}

export default App;
