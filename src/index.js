import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/state";

let rerender = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<React.StrictMode>
				<App state={state} dispatch={store.dispatch.bind(store)}/>
			</React.StrictMode>
		</BrowserRouter>, document.getElementById('root')
	);
	reportWebVitals();
}

rerender(store.getState());

store.subscribe(rerender);