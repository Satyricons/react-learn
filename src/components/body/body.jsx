import bodycss from './body.module.css';
import userimg from './userimg/budko.jpg'
import schema from './textimg/schema.png'
import qee from './userimg/qee.png'

const Body = () => {
    return (
            <div>
                <div className={bodycss.zagbody}>САХАРНЫЙ ДИАБЕТ 1-ГО ТИПА</div>
                <div className={bodycss.textbody}>

                    <div className={bodycss.item1}><b className={bodycss.d15}>Полезные статьи</b>

                           <div className={bodycss.item11}>
                               <div>Системы мониторинга</div>
                               <div>Питание</div>
                               <div>Как правильно считать каллории</div>
                               <div>Многое о многом</div>
                           </div>

                        </div>

                    <div>
                        <div>Ювенильный диабет 1 типа (СД1) — болезнь, связанная с нарушением обмена веществ, а именно с дефицитом гормона инсулина и повышенной концентрацией глюкозы в крови. Это аутоиммунное заболевание, при котором иммунитет ошибочно уничтожает собственные клетки организма, поэтому его сложно лечить. Болезнь поражает и взрослых и детей. Стать инсулинозависимым малыш может после перенесённого вируса или инфекции. Если сравнивать статистику по диабету 1 и 2-го типа, СД1 встречается примерно в одном из 10 случаев.</div>
                        <img src={schema} alt="img"/>
                    </div>

                    <div className={bodycss.item3}>

                        <div className={bodycss.img} ><img  src={userimg}  alt="img"/></div>
                        <div>Лечащий врач: <b>Будько Н.А.</b></div>
                        <hr/>
                        <div>Инсулин 1: Левемир (выдан: 20.08.2021, 2 шт.)</div>
                        <div>Инсулин 2: Новорапид (выдан: 20.08.2021, 1 шт.)</div>
                        <div>На прием к врачу: 30.09.2021</div>
                        <hr/>
                        <div>Мессенджер: <img className={bodycss.img2} src={qee}  alt="img"/></div>
                    </div>

                </div>
            </div>
    );
}

export default Body;