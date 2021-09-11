import React, {Suspense, lazy} from 'react';
import { useAuth } from './AuthContext';
import Loader from './components/Loader';

function App(){
    const [{user}] = useAuth()
    const UnAuthApp = lazy(()=> import('./unauthApp'))
    const AuthApp = lazy (()=> import ('./authApp'))
    return user ? (
        <Suspense fallback = {<Loader/>}>
            <AuthApp/>
        </Suspense>
    ):(
        <Suspense fallback={<Loader/>}>
            <UnAuthApp/>
        </Suspense>
    )
}

export default App;