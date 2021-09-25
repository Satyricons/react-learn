import sidebarcss from './sidebar.module.css';
import {NavLink} from "react-router-dom";


const User = (props) =>{
    return(
      <NavLink to={"/sidebar/"+props.id}>{props.name}<p /></NavLink>
    );
}

let arr=[
    {id:1, name:"Igor"},
    {id:2, name:"Ленка"}
]

let arr2 =arr.map((d,i)=><User key={i} name={d.name} id={d.id}/>);

const Sidebar = () => {
    return (
        <div className={sidebarcss.allsidebar}>
            {arr2}
        </div>
    );
}

export default Sidebar;