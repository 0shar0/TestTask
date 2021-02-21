import React from "react";
import style from './Section2Item2.module.css'
import {txt} from '../../../Data/Data.js'

export function Section2Item2 (props){
    return(
        <div className={style.items} style={{backgroundImage:"url('/Files/Rectangle 25 (1).png')"}}>
            <div className={style.wraper}>
                <div className={style.line}></div>
                <div className={style.paragraf}>
                    <div className={style.header}>
                        Наши преймущества
                    </div>
                    <div className={style.text}>
                        {txt}
                    </div>
                </div>
            </div>
        </div>
    )
}