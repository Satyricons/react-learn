import headcss from './head.module.css';
import logo from './img/logo.png';
import user from './img/user.png';
import {NavLink} from "react-router-dom";

const Head = (props) => {
    return (
        <div className={headcss.allhead}>

           <div>
               <NavLink to="/body">
               <img className={headcss.item1} src={logo}  alt="img"/>
               </NavLink>
            </div>

           <div>
               <NavLink className={headcss.item2} to="/body" >
               <p className={headcss.item21}><b>Эндокринология для всех</b></p>
               <p className={headcss.item22}>Барановичская детская городская поликлиника</p>
           </NavLink>
           </div>

           <div>
               <p className={headcss.item3}>225320 г. Барановичи, ул. Куйбышева, 46</p>
               <p className={headcss.item3}>+375 16 342-13-13</p>
           </div>

           <div className={headcss.item4}>

               <img className={headcss.item42} src={user}  alt="img"/>
               <div className={headcss.item43}>{props.userPage.id}</div>
               <div><NavLink className={headcss.item41} activeClassName={headcss.item41active} to="/spisok">Выйти</NavLink></div>
           </div>

       </div>
    );
}

export default Head;