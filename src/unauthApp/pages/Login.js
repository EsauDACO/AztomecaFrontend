import React, {useState} from 'react';
import AuthForm from '../../components/AuthForm';
import {useAuth} from '../../AuthContext';
import {Box, useToast} from '@chakra-ui/react';
import handleAsync from '../../utils/handleAsync';
import AUTH_SERVICE from '../../services/auth_service';
import useInput from '../../hooks/useInput';

export default function Login (props){
    const toast = useToast()
    const [,dispatch] = useAuth()
    const email = useInput('')
    const password = useInput('')
    const[loading, setLoading] = useState(false)

    const handleLogin = async e => {
        e.preventDefault(true)
        const data = {
            email: email.value,
            password: password.value
        }

        const {user} = await handleAsync(() => AUTH_SERVICE.LOGIN(data))

        setLoading(false)
        if(user){
            dispatch({type: 'LOGIN', payload: {user}})
        }else{
            toast({
                position:'top',
                title:'No encontramos tus datos',
                description:"La contraseña o el email no coinciden, vuelve a intentarlo",
                status: 'error',
                duration:2000,
                isClosable: true
            })
        }
    }


    const inputs = [{
        placeholder: 'E-mail',
        type: 'email',
        icon: 'user',
        labelName: 'email',
        control : {...email}
    },
    {
        placeholder: 'Password',
        type: 'password',
        icon: 'pwd',
        labelName: 'Password',
        control: {...password}
    }
    ]

    return(
        <Box
        as="main"
        d="flex"
        alignItems="center"
        justifyContent="center"
        boxSizing="border-box"
        w="100%"
        h="100vh"
        >
            <AuthForm
                title={'Login'}
                buttonText={'Enter'}
                inputs={inputs}
                actionButton = {handleLogin}
                loading = {loading}
            />
        </Box>
    )
}