import React from 'react';
import './navMenu.css';
import {Link} from 'react-router-dom'


export function NavMenu(props){
    return (
        <ul className="navMenu__lista">
            <li className="navMenu__item">
                <Link className="navMenu__link" to="/">
                    Bem vindo(a): <br />
                    <strong>{(props.children)? props.children.nick : ''}</strong>
                </Link>
            </li>
            <li className="navMenu__item">
                <Link className="navMenu__link" to="/">
                    Página Inicial
                </Link>
            </li>
            <li className="navMenu__item">
                <Link className="navMenu__link" to="/hashtags">
                    Hashtags
                </Link>
            </li>
            <li className="navMenu__item" >
                <Link className="navMenu__link" to="/logout">Logout</Link>
            </li>
        </ul>
    )
}