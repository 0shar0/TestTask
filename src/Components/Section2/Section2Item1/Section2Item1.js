import React from "react";
import style from './Section2Item1.module.css'
import {txt} from '../../../Data/Data.js'

export function Section2Item1 (props){
    return(
        <div className={style.items} style={{backgroundImage:"url('/Files/Rectangle 25.png')"}}>
            <div className={style.wraper}>
                <div className={style.paragraf}>
                    <div className={style.header}>
                        Почему мы?
                    </div>
                    <div className={style.text}>
                        {txt}
                    </div>
                </div>
                <div className={style.line}></div>
            </div>
        </div>
    )
}