import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import state, {addPost, addPostText, subscribe} from "./redux/state";

export let rerender = () => {
	ReactDOM.render(
		<BrowserRouter>
			<React.StrictMode>
				<App state={state} addPost={addPost} addPostText={addPostText}/>
			</React.StrictMode>
		</BrowserRouter>, document.getElementById('root')
	);
	reportWebVitals();
}

rerender();
subscribe(rerender);