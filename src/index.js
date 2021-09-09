import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {ThemeProvider} from '@chakra-ui/react';
import theme from './theme';
import {BrowserRouter} from 'react-router-dom';
import {AuthProvider} from './AuthContext';
import App from './App'

ReactDOM.render(
    <AuthProvider>
        <ThemeProvider theme = {theme}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ThemeProvider>
    </AuthProvider>
, document.getElementById('root'));

serviceWorker.unregister();
