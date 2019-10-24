import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import { Home } from './pages/Home/Home.js'
import { LoginPage } from './pages/Login/Login.js'
import { Logout } from './pages/Logout/Logout.js'

export function App(props){

    return (
    <BrowserRouter> 
        <Switch>
            <Route path="/" component={Home} exact={true}/>
            <Route path="/logout" component={Logout} exact={true}/>
            <Route path="/login" component={LoginPage} exact={true}/>
        </Switch>
     </BrowserRouter>
    )
}
