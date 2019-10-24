import React from 'react';
import './trendsArea.css';

export function TrendsArea(props){
    return (<li id={props.key}> <a href={props.children.link}>#{props.children.hastag}</a> </li>)

}
