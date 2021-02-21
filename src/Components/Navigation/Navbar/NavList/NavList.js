import React from "react";
import style from './NavList.module.css'

export function NavList (props){
    return(
        <div className={style.navList}>
            <div className={style.navListItem} id={style.active} >Главная</div>
            <div className={style.navListLine}></div>
            <div className={style.navListItem}>Услуги</div>
            <div className={style.navListLine}></div>
            <div className={style.navListItem}>Наши работы</div>
            <div className={style.navListLine}></div>
            <div className={style.navListItem}>О нас</div>
            <div className={style.navListLine}></div>
            <div className={style.navListItem}>Контакты</div>
        </div>
    )
}