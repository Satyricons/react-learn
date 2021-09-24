import headcss from './head.module.css';
import logo from './logo.png';


const Head = () => {
    return (
       <div className={headcss.allhead}>

           <div><img src={logo}></img></div>
           <div>
               <h1>Эндокринология для всех</h1>
               <p>Барановичская детская городская поликлиника</p>
           </div>
           <div>225320 г.Барановичи, ул. Куйбышева, 46
               <p>тел. +375 16 342-13-13</p></div>
           <div>CABINET</div>


       </div>

    );
}

export default Head;
