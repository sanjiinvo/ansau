import React from "react";
import logo from "./images/Logo.png"
import './navbar.scss'
import { Instagram, Tiktok, Youtube } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
import IconColor from "./iconcolor";
const Navbarhead = ()=>{


return(
    <div className="header">
        <div className="navbar">
            <ul className="soc-icons">
                <li><a href="#"><Instagram/></a></li>
                <li><a href="#"><Tiktok/></a></li>
                <li><a href="#"><Youtube/></a></li>
            </ul>
            <ul className="desk-menu-left">
                <li className="menu-item">
                    <a href="#">О комплексе</a>
                </li>
                <li className="menu-item">
                    <a href="#">3D Панорама </a>
                </li>
            </ul>
            
        <img src={logo} className="logo" alt="logo"/>
            <ul className="desk-menu-right">
                <li className="menu-item">
                    <a href="#">Уникальность</a>
                </li>
                <li className="menu-item">
                    <a href="#">Расположение </a>
                </li>
            </ul>
            <div className="zero-menu-right">

            </div>
        </div>
    </div>
    )
}

export default Navbarhead;