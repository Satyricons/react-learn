import headcss from './head.module.css';
import logo from './img/logo.png';


const Head = (props) => {
    return (
       <div className={headcss.allhead}>

           <div><img src={logo}></img></div>
           <div>
               <h1>Эндокринология для всех</h1>
               <p>Барановичская детская городская поликлиника</p>
           </div>
           <div><a>225320 г.Барановичи, ул. Куйбышева, 46</a>
               <p>тел. +375 16 342-13-13</p></div>
           <div>
               CABINET
               <p>{props.id}</p>
           </div>


       </div>

    );
}

export default Head;
