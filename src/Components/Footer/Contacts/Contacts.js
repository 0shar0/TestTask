import React from "react";
import style from './Contacts.module.css'

export function Contacts(props){
    return(
        <div className={style.contacts}>
            <header>Контактная информация</header>
            <p>Заводская улица, 2В, Буча,<br></br> Киевская область, 08292</p>
            <p>ПН-ПТ: 09:00-18:00</p>
            <p>+39(097)123-45-67</p>
        </div>
    )
}