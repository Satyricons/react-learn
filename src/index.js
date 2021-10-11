import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/store";
import {Provider} from "react-redux";


let rerender = () => {
	ReactDOM.render(
		<BrowserRouter>
			<React.StrictMode>

			<Provider store={store}>
				<App />
			</Provider>

			</React.StrictMode>
		</BrowserRouter>, document.getElementById('root')
	);
	reportWebVitals();
}

rerender();

store.subscribe(rerender);