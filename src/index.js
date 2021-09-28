import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {addPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
	<BrowserRouter>
		<React.StrictMode>
			<App state={state} addPost={addPost}/>
		</React.StrictMode>
	</BrowserRouter>, document.getElementById('root')
);
reportWebVitals();
