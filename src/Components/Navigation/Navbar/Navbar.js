import React from "react";
import {Search} from "./Search/Search";
import {NavList} from "./NavList/NavList";
import style from './Navbar.module.css'

export function Navbar (props){
    return(
        <div className={style.navbar}>
            <img src='/Files/Rectangle%20305.png' className={style.img} />
            <NavList/>
            <Search/>

        </div>
    )
}