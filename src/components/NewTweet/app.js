import React, { useState } from 'react';
import './novoTweet.css';

export function NewTweet(props){

    const [tamanho, setTamanho] = useState(0)
    const tamanhoTotal = 140
    const is_validated = tamanho >tamanhoTotal
    const novoTweet__status = (is_validated)? "novoTweet__status novoTweet__status--invalido": "novoTweet__status"

    function onValidaTweet(e){  
        const $textArea = e.target.value
        setTamanho($textArea.length)
    }
    
    
    return (
        <div className="widget">
            <form className="novoTweet" onSubmit={props.onFormSubmit}>
                <div className="novoTweet__editorArea">
                    <span className={ novoTweet__status }>{tamanho}/{tamanhoTotal}</span>
                    <textarea className="novoTweet__editor" placeholder="O que está acontecendo?" onChange={onValidaTweet} ></textarea>
                </div>
                <button type="submit" disabled={is_validated} className="novoTweet__envia">Tweetar Meu</button>
            </form>
        </div>
    )
}