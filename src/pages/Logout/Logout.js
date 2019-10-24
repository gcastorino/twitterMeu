import {React, Fragment } from 'react'
import { deslogar} from '../../business/LoginService.js'


export function  Logout(props){
   
    deslogar()
    props.history.push('/logout')

    return (
        <Fragment></Fragment>
    )
} 