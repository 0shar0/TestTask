import React from "react";
import {Navbar} from "./Navbar/Navbar";
import {Card} from "./Card/Card";
import Carousel from "react-elastic-carousel";
import style from './Head.module.css'

export function Head (props){
    return(
        <nav style={{position:'relative',zIndex:3}}>
            <Navbar/>
            <Carousel showArrows={false} className={style.carous} >
                <Card/>
                <Card/>
            </Carousel>
        </nav>
    )
}
