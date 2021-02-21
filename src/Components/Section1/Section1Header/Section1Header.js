import React from "react";
import styles from './Section1Header.module.css'

export function Section1Header (props){
    return(
        <header className={styles.head}>
            Услуги
            <div className={styles.border}></div>
        </header>
    )
}