import React from "react";
import logo from "./images/Logo.png"
import './navbar.scss'
import { Instagram, Tiktok, Youtube } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
const Navbarhead = ()=>{


    return(
        <div className="navbar">
            <menu className="menu-desc">
                <ul className="desk-menu-list">
                    <li className="desk-menu-list-item">
                        <a href="#">О комплексе</a>
                    </li>
                    <li className="desk-menu-list-item">
                        <a href="#">3D Панорама</a>
                    </li>
                    <li className="desk-menu-list-item">
                        <a href="#">Уникальность</a>
                    </li>
                    <li className="desk-menu-list-item">
                        <a href="#">Расположение</a>
                    </li>
                </ul>
            </menu>
            
                <img src={logo} className="logo" alt="logo"/>
            
            <div className="buttons-bar">
                <ul className="soc-buttons">
                <li className="soc-buttons-item">
                        <a href="#"><Instagram/> Instagram</a>
                    </li>
                    <li className="soc-buttons-item">
                        <a href="#"><Tiktok/> TikTok</a>
                    </li>
                    <li className="soc-buttons-item">
                        <a href="#"><Youtube/> YouTube</a>
                    </li>
                </ul>
                <button className="sub-button">
                    Оставить заявку
                </button>
            </div>
        </div>
    )
}

export default Navbarhead;