import React from 'react'
import {NavLink} from 'react-router-dom/cjs/react-router-dom.min'
import {Box,Text, Image,Spacer, Button, Center} from '@chakra-ui/react'
import { useAuth } from '../../AuthContext'
import handleAsync from '../../utils/handleAsync'
import routes from '../../authApp/routes'
import AUTH_SERVICE from '../../services/auth_service'

export default function NavBar(){
    const [, dispatch] = useAuth()
    const [{user}] = useAuth()

    const logout = async () =>{
        await handleAsync(AUTH_SERVICE.LOGOUT)
        dispatch({type: 'LOGOUT'})
    }

    const setLinks = () =>{
        return routes.map(function({label, path, type}){
            if(type==='menu')
            return <>
                    <Box
                    marginRight="40px"
                    key={path}
                    fontSize={['sm', 'md', 'lg', 'xl']}
                    mt={[3,3,5,5]}
                    mb={[3,3,5,5]}
                    >
                        <NavLink
                        variant="link"
                        activeStyle={{fontWeight: 'bold'}}
                        style={{color:'white'}}
                        exact to={path}
                        >
                            {label}
                        </NavLink>
                    </Box>
                    </>
        })
    }
    return(
        <Center
            as="nav"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            boxSizing="border-box"
            py={3}
            px={[5,5,10,20]}
            h="15vh"
            w="100vw"
            position="fixed"
            boxShadow="2xl"
            backgroundColor="pink.100"
        >
            <Box>
                <Image
                    w="300px"
                    src="https://res.cloudinary.com/dxabmmloo/image/upload/v1631674553/AztomecaAltaColor_cmlg67.png"
                    alt="Logo"
                    >
                </Image>
            </Box>
            <Box
            display="flex"
            flexDirection="row"
            JustifyContent="space-between"
            boxSizing="border-box"
            py={10}
            >
            {setLinks()}
            </Box>
            <Box>
                <Button
                size="xs"
                colorScheme="teal"
                variant="link"
                font="bold"
                color="Black"
                cursor="pointer"
                onClick={logout}
                py={17}
                marginRight="20px"
                >
                Cerrar Sesión
                </Button>
            </Box>
        </Center>
    )
}