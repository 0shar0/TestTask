import React from "react";
import {Section2header} from "./Section2Header/Section2Header";
import {Section2Item1} from "./Section2Item1/Section2Item1";
import {Section2Item2} from "./Section2Item2/Section2Item2";
import style from './Section2.module.css'

export function Section2 (props){
    return(
        <section className={style.section2}>
            <Section2header/>
            <Section2Item1/>
            <Section2Item2/>
        </section>
    )
}