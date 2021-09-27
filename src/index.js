import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state";


ReactDOM.render(
	<React.StrictMode>
		<App state={state} path={state.bodyPage.path} naz={state.bodyPage.naz} text={state.bodyPage.text}/>
	</React.StrictMode>,
	document.getElementById('root')
);
reportWebVitals();
