import bodycss from './body.module.css';
import userimg from './userimg/budko.jpg'
import qee from './userimg/qee.png'
import React from "react";
import Message from "../spisok/Message";

const Body = (props) => {
	let newPostElement = React.createRef();
	let allMessage = props.messagePage.posts.map((d, i) => <Message key={i}
																	name={props.messagePage.posts[i].message}/>);
	let onPostChange = () => {
		console.log(newPostElement.current.value);
		props.addPostText(newPostElement.current.value)
	}

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
				<div className={bodycss.item2}>{props.text}</div>
				<div className={bodycss.item3}>
					<div className={bodycss.img}><img src={userimg} alt="img"/></div>
					<div>Лечащий врач: <b>Будько Н.А.</b></div>
					<hr/>
					<div>Инсулин 1: Левемир (выдан: 20.08.2021, 2 шт.)</div>
					<div>Инсулин 2: Новорапид (выдан: 20.08.2021, 1 шт.)</div>
					<div>На прием к врачу: 30.09.2021</div>
					<hr/>
					<div>Мессенджер: <img className={bodycss.img2} src={qee} alt="img" onClick={() => {
						props.addPost(newPostElement.current.value);
					}}/></div>
					<textarea ref={newPostElement} value={props.messagePage.newPostText} onChange={onPostChange}/>
					{allMessage}
				</div>
			</div>
		</div>
	);
}

export default Body;