import React from "react";
import style from './Search.module.css'
import {Drop} from "./Drop/Drop";
import {hideSearch} from "../../../../Data/Data";

export function Search (props){
    return(
        <div className={style.search}>
            <div className={style.input}>
                <div id='search' className={style.hiden}>
                    <input  value={'Поиск'}/>
                    <img className={style.newGlass} src='/Files/glass.png'/>
                </div>
            <img src='/Files/glass.png' onClick={hideSearch}/>
            </div>
            <Drop/>
        </div>
    )
}