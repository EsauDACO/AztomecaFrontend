import React from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/Signup';

function UnAuthApp (){
    return(
            <Switch>
                <Route exact path= "/" component={Login}></Route>
                <Route exact path="/signup" component= {SignUp}/>
                <Redirect to = "/"/>
            </Switch>
    )
}

export default UnAuthApp