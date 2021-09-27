import './App.css';
import PreHead from "./components/prehead/prehead";
import Head from "./components/head/head";
import Body from "./components/body/body";
import {BrowserRouter, Route} from "react-router-dom";
import Spisok from "./components/spisok/spisok";

function App(props) {
	return (
		<BrowserRouter>
			<div className="App">
				<PreHead path={props.path}/>
				<Head id="Егор Каменски"/>
				<Route path="/spisok" component={Spisok}/>

				<Route path={props.path[0]}> <Body naz={props.naz[0]} text={props.text[0]}/></Route>
				<Route path={props.path[1]}> <Body naz={props.naz[1]} text={props.text[1]}/></Route>
				<Route path={props.path[2]}> <Body naz={props.naz[2]} text={props.text[2]}/></Route>
				<Route path={props.path[3]}> <Body naz={props.naz[3]} text={props.text[3]}/></Route>
				<Route path={props.path[4]}> <Body naz={props.naz[4]} text={props.text[4]}/></Route>
			</div>
		</BrowserRouter>
	);
}

export default App;
