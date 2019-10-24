import React,{useState} from 'react';
import { Tweet } from '../Tweet/app.js'
import { Dashboard } from '../Dashboard/app.js'
import './container.css';
//import {tweet} from '../../business/TweetService'

export function Container(props){

    const [listaTweets, setListaTweets] = useState([])

    function onFormSubmit(e){
        const conteudo = document.querySelector('.novoTweet__editor')
        e.preventDefault()
        setListaTweets([{ 
            usuario: props.children,
            conteudo:conteudo.value,
            interaction:{
                heart:{count:0,active:false},
                star:{count:0,active:false},
                sad:{count:0,active:false},
                dislike:{count:0,active:false}
            }
        }, ...listaTweets]) 
        conteudo.value = ''
    }
    return (
        <div className="container">
            <Dashboard onFormSubmit={onFormSubmit} />
            <div className="dashboard dashboard__centro">
                <div className="widget">
                    <div className="tweetsArea">
                        {
                            listaTweets.map((conteudo) =>(
                                <Tweet post={conteudo} key={conteudo._id} />
                            )) 
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}