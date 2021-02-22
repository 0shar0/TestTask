import React from "react";
import style from "./Drop.module.css";
import {Dropdown} from "react-bootstrap";


export function Drop(props){
    return(
        <Dropdown className={style.drop}>
            <Dropdown.Toggle
                style={{backgroundColor:'white', border:'none'}}>
                <img id={style.flags} src='/Files/Rus.png'/>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item><div><img id={style.flags} src='/Files/USA.png'/></div></Dropdown.Item>
                <Dropdown.Item><div><img id={style.flags} src='/Files/flag-ukraine-3158.png'/></div></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}