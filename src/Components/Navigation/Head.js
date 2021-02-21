import React from "react";
import {Navbar} from "./Navbar/Navbar";
import {Card} from "./Card/Card";
import Carousel from "react-elastic-carousel";

export function Head (props){
    return(
        <nav style={{position:'relative',zIndex:3}}>
            <Navbar/>
            <Carousel showArrows={false}  >
                <Card/>
                <Card/>
            </Carousel>
        </nav>
    )
}
