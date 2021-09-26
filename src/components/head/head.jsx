import headcss from './head.module.css';
import logo from './img/logo.png';
import {NavLink} from "react-router-dom";

const Head = (props) => {
    return (
        <div className={headcss.allhead}>

           <div>
               <NavLink to="/body">
               <img src={logo}  alt="img"/>
               </NavLink>
            </div>

           <div>
               <NavLink className={headcss.item2} to="/body" >
               <p className={headcss.item21}><b>Эндокринология для всех</b></p>
               <p className={headcss.item22}>Барановичская детская городская поликлиника</p>
           </NavLink>
           </div>

           <div>
               <p className={headcss.item3}>225320 г.Барановичи, ул. Куйбышева, 46</p>
               <p className={headcss.item3}>тел. +375 16 342-13-13</p>
           </div>

           <div >
               <NavLink className={headcss.item4} activeClassName={headcss.item4active} to="/spisok">Войти</NavLink>
               <p className={headcss.item42}>{props.id}</p>
           </div>

       </div>
    );
}

export default Head;