import React from "react";
import style from './Servicec.module.css'

export function Servises(props) {
    return (
        <div className={style.wraper}>
            <div className={style.line}></div>
            <div className={style.servises}>
                <header>Услуги</header>
                <div className={style.servisesWraper}>
                    <div>
                    <p>Производство оборудывания</p>
                    <p>Металическая мебель</p>
                    <p>Металоконструкции</p>
                    <p>Металообработка</p>
                    </div>
                    <div>
                    <p>Раскрой метала</p>
                    <p>Конструкторское бюро</p>
                    <p>Аренда техники</p>
                    <p>Ремонт техники</p>
                    </div>
                </div>
            </div>
            <div className={style.line}></div>
        </div>
    )
}