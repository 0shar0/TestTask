import React from "react";
import styles from "./Mechanism.module.css";

export function Mechanism(props){
    return(
        <div className={styles.allMechanism}>
            <div className={styles.fullMechanism1}>
                <img className={styles.mechanism1} src='/Files/Vector.png'/>
                <img className={styles.mechanism2} src='/Files/Vector.png'/>
                <img className={styles.mechanism3} src='/Files/Vector.png'/>
            </div>
            <div className={styles.fullMechanism2}>
                <img className={styles.mechanism4} src='/Files/Vector.png'/>
                <img className={styles.mechanism5} src='/Files/Vector.png'/>
                <img className={styles.mechanism6} src='/Files/Vector.png'/>
            </div>
        </div>
    )
}