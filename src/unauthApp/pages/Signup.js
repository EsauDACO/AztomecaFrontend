import React, {useState} from 'react';
import AuthForm from '../../components/AuthForm';
import {useAuth} from '../../AuthContext';
import {Box, useToast, } from '@chakra-ui/react';
import handleAsync from '../../utils/handleAsync';
import AUTH_SERVICE from '../../services/auth_service';
import useInput from '../../hooks/useInput';
import {useHistory} from 'react-router-dom';


export default function SignUp(props){
    const toast = useToast()
    const [,dispatch] = useAuth()
    const[loading, setLoading] = useState(false)
    const name = useInput('')
    const surname = useInput('')
    const email = useInput('')
    const password = useInput('')
    const gender = useInput('')
    const birthdate = useInput('')
    const phoneNumber = useInput('')
    const country = useInput('')
    const state = useInput('')
    const role = useInput('ADMIN')
    const history = useHistory()

    const handleSignup = async e =>{
        e.preventDefault()
        setLoading(true)

        const data ={
            name: name.value,
            surname: surname.value,
            email: email.value,
            password: password.value,
            gender: gender.value,
            birthdate: birthdate.value,
            phoneNumber: Number(phoneNumber.value),
            country: country.value,
            state: state.value
        }
        console.log("Esta es la data",data)
        const {user} = await handleAsync(() => AUTH_SERVICE.SIGNUP(data))
        setLoading(false)

        if(user){
            history.push('/')
        }else{
            toast({
                position:'top',
                title:'Error',
                description:'Something went wrong',
                status: 'error',
                duration:2000,
                isClosable: true
            })
        }
    }

const inputs =[{
    placeholder: 'Name',
    type: 'text',
    labelName: 'Name',
    control: {...name}
},
{
    placeholder: 'Surname',
    type: 'text',
    labelName: 'Surname',
    control: {...surname}
},
{
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
},
{
    placeholder: 'Gender',
    type: 'list',
    labelName: 'Gender',
    control: {...gender}
},
{
    placeholder: 'Birthdate',
    type: 'date',
    labelName: 'Birthdate',
    control: {...birthdate}
},
{
    placeholder: 'PhoneNumber',
    type: 'Number',
    labelName: 'Phone Number',
    control: {...phoneNumber}
},
{
    placeholder: 'Country',
    type: 'text',
    labelName: 'Country',
    control: {...country}
},
{
    placeholder: 'State',
    type: 'text',
    labelName: ' State',
    control: {...state}
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
        marginTop='10%'
        marginBottom="10%"
        >
            <AuthForm
                title={'Register'}
                buttonText={'Enter'}
                inputs={inputs}
                loading={loading}
                actionButton={handleSignup}
            />
        </Box>
    )
}