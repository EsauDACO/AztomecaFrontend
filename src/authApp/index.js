import React from 'react'
import routes from './routes';
import {Switch, Route, Redirect} from 'react-router-dom';
import { VStack } from '@chakra-ui/react';
import NavBar from '../components/NavBar/navBar';


function AuthApp(){
    const setRoutes = () => (
        routes.map(({path, Component})=> <Route key={path} exact path={path} component={Component}/>)
    )
    return(
        <>
        <Switch>
            {setRoutes()}
                <Redirect to="/app/home" />
                </Switch>
                <NavBar/>
        </>
    )
}

export default AuthApp