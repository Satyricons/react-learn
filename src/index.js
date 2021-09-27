import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state";


ReactDOM.render(
	<React.StrictMode>
		<App state={state} id={state.id} path={state.path} naz={state.naz} text={state.text}/>
	</React.StrictMode>,
	document.getElementById('root')
);
reportWebVitals();
