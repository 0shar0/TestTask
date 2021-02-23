import React from "react";
import style from './Burger.module.css'
import {showBurger} from '../../../../Data/Data'

export function Burger(props) {
    return (
        <div className={style.wraper} >
            <div className={style.burger} id='menu' onClick={showBurger}>
                <div id={style.burgerLine1} className={style.burgerLine}></div>
                <div id={style.burgerLine2} className={style.burgerLine}></div>
                <div id={style.burgerLine3} className={style.burgerLine}></div>
                <div className={style.menu} id='burger'>
                    <div className={style.items}>Меню
                        <div>
                            <img className={style.flag} src={'/Files/Rus.png'}/>
                            <img className={style.flag} style={{opacity:"0.3"}} src={'/Files/USA.png'}/>
                            <img className={style.flag} style={{opacity:"0.3"}} src={'/Files/flag-ukraine-3158.png'}/>
                        </div>
                    </div>
                    <div className={style.line}></div>
                    <div className={style.items}><p>Услуги</p><p style={{transform: "rotate(90deg)"}}>^</p></div>
                    <div className={style.line}></div>
                    <div className={style.items}>Наши работы</div>
                    <div className={style.line}></div>
                    <div className={style.items}>О нас</div>
                    <div className={style.line}></div>
                    <div className={style.items}>Контакты</div>
                    <div className={style.line}></div>
                </div>
            </div>
        </div>
    )
}
