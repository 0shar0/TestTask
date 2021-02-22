import React from "react";
import style from './Search.module.css'
import {Drop} from "./Drop/Drop";

export function Search (props){
    return(
        <div className={style.search}>
            <div className={style.input}>
            <input  value={'Поиск'}/>
            <div><img src='/Files/glass.png'/></div>
            </div>
            <Drop/>
        </div>
    )
}