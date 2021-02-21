import React from "react";
import {mainImage} from '../../../Data/Data'
import style from './Card.module.css'


export function Card(props) {
    return (<div className={style.card} style={{backgroundImage: mainImage}}>
            <div className={style.wraper}>
                <p id={style.first}>Высокоточное изготовление</p>
                <div className={style.line}></div>
                <p id={style.sec}>изделий из метала по чертежам</p>
            </div>
        </div>
    )
}