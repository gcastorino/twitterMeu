import React from 'react';
import { NavMenu } from '../NavMenu/app.js'
import './cabecalho.css';

export function Cabecalho(props){
    const nav = (props.children)? <NavMenu>{props.children}</NavMenu> : ''
    return (
        <header className="cabecalho">
            <div className="cabecalho__container container">
                <h1 className="cabecalho__logo">
                    <img src="https://image.flaticon.com/icons/svg/1604/1604538.svg" alt="" />
                    <a href="/">Twitter <span>Meu</span></a>
                </h1>
                <nav className="navMenu">
                    {nav}
                </nav>
            </div>
        </header>
    )

}