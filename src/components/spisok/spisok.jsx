import spisokcss from './spisok.module.css';
import User from './user';

let arrBd = [
	{id: 1, name: "Igor"},
	{id: 2, name: "Ленка"}
]

let allSpisok = arrBd.map((d, i) => <User key={i} name={d.name} id={d.id}/>);

const Spisok = () => {
	return (
		<div className={spisokcss.allspisok}>
			{allSpisok}
		</div>
	);
}

export default Spisok;