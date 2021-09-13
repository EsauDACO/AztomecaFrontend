import { background } from '@chakra-ui/styled-system';
import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';
import NavBar from '../components/NavBar/navBar';
import routes from './routes';

function AuthApp(){
    const setRoutes = () => (
        routes.map(({path,Component})=> <Route key={path} exact path={path} component={Component}/>)
    )
    return(
        <>
            <NavBar/>
            <Switch>
                {setRoutes()}
                <Redirect to = "/app/home"/>
            </Switch>
        </>
    )
}

export default AuthApp