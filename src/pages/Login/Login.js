import React, { useState, useRef, Fragment } from 'react'
import { Cabecalho } from '../../components/Cabecalho/app.js'
import { logar} from '../../business/LoginService.js'
import './Login.css'

export function  LoginPage(props){
    const $inputLogin = useRef(null)
    const $inputPass = useRef(null)
    const [isValidated, setIsValidated] = useState(true)
    function onFormSubmit(e){
        e.preventDefault()
        const user = $inputLogin.current.value
        const pass = $inputPass.current.value
        if(validate(user, pass)){
            logar(user,pass)
                .then(()=>{
                    props.history.push('/')
                })
                .catch(error => setIsValidated(false))
                
        }
        
    }
    function validate(user, pass){
        const validate = (user.length > 4) || (user.length > 4)
        setIsValidated(validate)
        return validate
    }

    return (
        <Fragment>
        <Cabecalho ></Cabecalho>
        <div className="loginPage">
            <div className="container">
                <div className="widget">
                    <h2 className="loginPage__title">Seja bem vindo!</h2>
                    <form className="loginPage__form" action="/" onSubmit={ onFormSubmit }>
                        <div className="loginPage__inputWrap">
                            <label className="loginPage__label" htmlFor="login">Login</label> 
                            <input className="loginPage__input" ref={$inputLogin} type="text" id="login" name="login"/>
                        </div>
                        <div className="loginPage__inputWrap">
                            <label className="loginPage__label" htmlFor="senha">Senha</label> 
                            <input className="loginPage__input" ref={$inputPass} type="password" id="senha" name="senha"/>
                        </div>
                        {(!isValidated)? <div className="loginPage__errorBox">
                            Login ou senha invalido!
                        </div>:''}
                        <div className="loginPage__inputWrap">
                            <button className="loginPage__btnLogin" type="submit">
                                Logar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </Fragment>
)} 