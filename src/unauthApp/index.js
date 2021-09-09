import React from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';

function UnAuthApp (){
    return(
            <Switch>
                <Route exact path= "/" component={()=> <p>Hola</p>}/>
                <Route exact path="/signup" component= {()=> <p>Hello</p>}/>
                <Redirect to = "/"/>
            </Switch>
    )
}

export default UnAuthApp