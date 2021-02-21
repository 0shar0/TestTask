import React from "react";
import style from './Search.module.css'
import DropdownButton from "react-bootstrap/DropdownButton";
import {Dropdown} from "react-bootstrap";

export function Search (props){
    return(
        <div className={style.search}>
            <div><img src='/Files/glass.png'/></div>

            <Dropdown>
                <Dropdown.Toggle
                style={{backgroundColor:'white', border:'none'}}>
                    <img id={style.flags} src='/Files/Rus.png'/>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item><img id={style.flags} src='/Files/USA.png'/></Dropdown.Item>
                    <Dropdown.Item ><img id={style.flags} src='/Files/flag-ukraine-3158.png'/></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}