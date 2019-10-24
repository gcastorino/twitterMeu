import React from 'react';
import './css/tweet.css';
import './css/btn.css';
import './css/icon.css';
import PropTypes from 'prop-types'

Tweet.propType = {
    count: PropTypes.number
} 

const icon = {
    heart:"https://www.flaticon.com/premium-icon/icons/svg/303/303617.svg",
    star:"https://image.flaticon.com/icons/svg/308/308839.svg",
    sad:"https://www.flaticon.com/premium-icon/icons/svg/1882/1882096.svg",
    dislike:"https://image.flaticon.com/icons/svg/1300/1300657.svg"
}
export function Tweet(props){
    return (
    <article className="tweet" id={props.key}> 
        {denunciar()}
        <div className="tweet__cabecalho">        
            <img className="tweet__fotoUsuario" src={props.post.user.photo} alt={props.post.user.nick} />
            <span className="tweet__nomeUsuario">{props.post.user.name}</span>
            <a href="/"><span className="tweet__userName">{props.post.user.nick}</span></a>
        </div>
        <p className="tweet__conteudo"><span>{props.post.conteudo}</span></p>
        {footer(props.post.interaction)}
    </article>)
}

function denunciar(){
    return (<button className="btn btn--clean icon_report">
        <img className="icon_report" src="https://image.flaticon.com/icons/svg/562/562802.svg" viewBox="0 0 47.5 47.5" alt="Denunciar" />
    </button>)
}

function footer(option){
    return (<footer className="tweet__footer">
        {icone(option.heart, icon.heart)}
        {icone(option.star, icon.star)}
        {icone(option.sad, icon.sad)}
        {icone(option.dislike, icon.dislike)}
    </footer>)
}

function icone(option, icon){
    return (<button className="btn btn--clean">
        <img className={option.active ?'icon icon--active':'icon'} src={icon} viewBox="0 0 47.5 47.5" alt="" />
        {option.count}
    </button>)
}