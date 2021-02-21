import React from "react";
import styles from "./Section2Header.module.css";

export function Section2header(pops){
    return(
        <header className={styles.head}>
            Наша компания
            <div className={styles.border}></div>
        </header>
    )
}