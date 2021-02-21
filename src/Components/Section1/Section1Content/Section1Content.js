import React from "react";
import style from './Sectio1Content.module.css'

export function Section1Content(props){
    return(
        <div className={style.section1Items} style={{backgroundImage:props.image, width:`${props.width}px`}}>
            <div className={style.text}>
                <p>{props.text}</p>
                <div className={style.line}></div>
            </div>
        </div>
    )
}