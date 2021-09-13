import React from 'react'
import {NavLink} from 'react-router-dom/cjs/react-router-dom.min'
import {Box,Text, Image,Spacer} from '@chakra-ui/react'
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
            return <Box
                    key={path}
                    fontSize={['sm', 'md', 'lg', 'xl']}
                    mt={[3,3,5,5]}
                    mb={[3,3,5,5]}
                    >
                        <NavLink
                        activeStyle={{fontWeight: 'bold'}}
                        style={{color:'white'}}
                        exact to={path}
                        >
                            {label}
                        </NavLink>
                    </Box>
        })
    }
    return(
        <Box
            as="nav"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            boxSizing="border-box"
            py={10}
            px={[5,5,10,20]}
            h="12vh"
            w="100vw"
            position="fixed"
            boxShadow="2xl"
            backgroundColor="blue.100"
        >
            <Box>
                <Image
                    boxSize="140px"
                    borderRadius="full"
                    backgroundColor="white"
                    src="https://res.cloudinary.com/dxabmmloo/image/upload/v1631447763/AzAltaColor_b6n4n7.png"
                    alt="Logo"
                    >
                </Image>
            </Box>
            <Box
            >{setLinks()}</Box>
            <Box>
            <Spacer/>
                <Box
                color="Black"
                cursor="pointer"
                onClick={logout}
                fontSize={['md', 'lg', 'lg', 'xl']}
                mb={[3,3,5,10]}
                >
                Cerrar Sesión
                </Box>
            </Box>
        </Box>
    )
}