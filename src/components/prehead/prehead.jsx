import {BrowserRouter, Route} from "react-router-dom";
import prehead from "./prehead.module.css"


function PreHead() {
	return (
		<BrowserRouter>
			<div className={prehead.allprehead}>
				<ul className={prehead.ul}>
					<li>Полезная информация</li>
					<li>Умные устройства</li>
					<li>Где купить</li>
					<li>Школа диабета</li>
					<li>Считаем углеводы</li>
				</ul>
			</div>
		</BrowserRouter>
	);
}

export default PreHead;
