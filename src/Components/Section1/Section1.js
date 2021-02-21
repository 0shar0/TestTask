import React from "react";
import {Section1Header} from "./Section1Header/Section1Header";
import styles from './Section1.module.css'
import {Section1Content} from "./Section1Content/Section1Content";
import {section1Data} from '../../Data/Data.js'
import {Mechanism} from "./Mechanism/Mechanism";

let section1Component = section1Data.map((el) => {
    return <Section1Content text={el.text} image={el.img} width={el.width}/>
})

export function Section1(props) {
    return (
        <section>
            <Mechanism/>
            <div className={styles.block}>
                <div className={styles.section1}>
                    <Section1Header/>

                    <div className={styles.section1Wraper}>
                        {section1Component}
                    </div>

                    <div className={styles.section1Footer}>
                        <p>Быстрый расчет цены по чертежу</p>
                    </div>
                </div>
            </div>
        </section>
    )
}