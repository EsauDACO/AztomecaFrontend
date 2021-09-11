import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

function AuthApp(){
    return(
        <Switch>
        <Route exact path="/app" component={()=> <h1>la ruta del app</h1>}/>
        <Redirect to = '/app'/>
        </Switch>
    )
}

export default AuthApp