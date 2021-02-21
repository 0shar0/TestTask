import React from "react";
import style from './Info.module.css'

export function Info(props){
    return(
        <div className={style.info}>
            <header>О компании</header>
            <p>Наши работы</p>
            <p>Контакты</p>
            <p>Доставка</p>
            <p>Форма заказа</p>
        </div>
    )
}