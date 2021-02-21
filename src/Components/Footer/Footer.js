import React from "react";
import {Info} from "./Info/Info";
import {Contacts} from "./Contacts/Contacts";
import {Servises} from "./Servises/Servises";
import style from './Footer.module.css'

export function Footer (props){
    return(
        <footer className={style.footer}>
            <Info/>
            <Servises/>
            <Contacts/>
        </footer>

    )
}