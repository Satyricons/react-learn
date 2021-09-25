import headcss from './head.module.css';
import logo from './img/logo.png';
import {BrowserRouter} from "react-router-dom";


const Head = (props) => {
    return (
        <BrowserRouter><div className={headcss.allhead}>

           <div>
               <a href="/body">
               <img src={logo} />
               </a>
            </div>

           <div>
               <a className={headcss.item2} href="/body" >
               <p className={headcss.item21}><b>Эндокринология для всех</b></p>
               <p>Барановичская детская городская поликлиника</p>
           </a>
           </div>

           <div >
               <p>225320 г.Барановичи, ул. Куйбышева, 46</p>
               <p>тел. +375 16 342-13-13</p>
           </div>

           <div >
               <a className={headcss.item4} href="/sidebar">Войти</a>
               <p>{props.id}</p>
           </div>


       </div></BrowserRouter>
    );
}

export default Head;