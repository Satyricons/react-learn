import './App.css';
import Menu from "./components/menu/menu";
import Head from "./components/head/head";
import Body from "./components/body/body";
import Spisok from "./components/spisok/spisok";
import {BrowserRouter, Route} from "react-router-dom";
import state from "./redux/state";

function App(props) {
	return (
		<BrowserRouter>
			<div className="App">
				<Menu naz={props.state.bodyPage.naz} path={props.state.bodyPage.path}/>
				<Head id={props.state.userPage.id}/>
				<Route path="/spisok" component={Spisok}/>

				<Route path={props.state.bodyPage.path[0]}> <Body naz={props.state.bodyPage.naz[0]} text={props.state.bodyPage.text[0]}/></Route>
				<Route path={props.state.bodyPage.path[1]}> <Body naz={props.state.bodyPage.naz[1]} text={props.state.bodyPage.text[1]}/></Route>
				<Route path={props.state.bodyPage.path[2]}> <Body naz={props.state.bodyPage.naz[2]} text={props.state.bodyPage.text[2]}/></Route>
				<Route path={props.state.bodyPage.path[3]}> <Body naz={props.state.bodyPage.naz[3]} text={props.state.bodyPage.text[3]}/></Route>
				<Route path={props.state.bodyPage.path[4]}> <Body naz={props.state.bodyPage.naz[4]} text={props.state.bodyPage.text[4]}/></Route>

			</div>
		</BrowserRouter>
	);
}

export default App;
