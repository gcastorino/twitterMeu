import React from 'react';
import { TrendsArea } from '../TrendsArea/app.js'
import { NewTweet } from '../NewTweet/app.js'
import './dashboard.css';

const listaTrendsArea = [
    {hastag:'bagulhos', link:'/'}, 
    {hastag:'bagulheiros', link:'/'}
]

export function Dashboard(props){
    return (
        <div className="dashboard">
            <NewTweet onFormSubmit={props.onFormSubmit} />
            <div className="widget">
                <div className="trendsArea">
                    <h2 className="trendsArea__titulo widget__titulo">Trends Brasil</h2>
                    <ol className="trendsArea__lista">
                        { 
                            listaTrendsArea.map((list, key)=>(
                                <TrendsArea key={key} >{list}</TrendsArea> 
                            ))  
                        }
                    </ol>
                </div>
            </div>
        </div>
        
    )

}