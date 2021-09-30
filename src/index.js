import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/state";

export let rerender = () => {
	ReactDOM.render(
		<BrowserRouter>
			<React.StrictMode>
				<App state={store.getState()} addPost={store.addPost} addPostText={store.addPostText}/>
			</React.StrictMode>
		</BrowserRouter>, document.getElementById('root')
	);
	reportWebVitals();
}

rerender();
store.subscribe(rerender);