import bodycss from './body.module.css';

import qee from './userimg/qee.png'
import React from "react";

const Body = (props) => {

	// console.log(props)

	const onKeyDown = e => {
		if (e.code === "Enter") {
			e.preventDefault();
			onPostAdd()
		}
	}
	let newPostElement = React.createRef();
	let onPostChange = () => props.updatePostText(newPostElement.current.value);
	let onPostAdd = () => props.addPost();

	return (
		<div>

			<div className={bodycss.zagbody}>{props.naz}</div>

			<div className={bodycss.textbody}>

				<div className={bodycss.item1}><b className={bodycss.d15}>Полезные статьи</b>
					<div className={bodycss.item11}>
						<div>Системы мониторинга</div>
						<div>Питание</div>
						<div>Как правильно считать каллории</div>
						<div>Многое о многом</div>
					</div>
				</div>

				<div className={bodycss.item2}>

					<div>
						<img className={bodycss.img} src={props.userUrl} alt=""/>
					</div>

					<div className={bodycss.item22}>
						<b>{props.userName}</b>
						<hr/>
						<p>Инсулин 1: Левемир (выдан: 20.08.2021, 2 шт.)</p>
						<p>Инсулин 2: Новорапид (выдан: 20.08.2021, 1 шт.)</p>
						<p>На прием к врачу: 30.09.2021</p>
						<hr/>
						<img className={bodycss.img2} src={qee} alt="img"/>
					</div>

				</div>

				<div className={bodycss.item3}>

					<div className={bodycss.item31}>{props.allMessage}</div>
					<div><textarea className={bodycss.textarea} ref={newPostElement} value={props.simvol}
								   onChange={onPostChange} onKeyDown={onKeyDown}/></div>

				</div>

			</div>

		</div>
	);
}

export default Body;