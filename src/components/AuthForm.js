import React from 'react';
import {FormControl,FormLabel,FormErrorMessage,FormHelperText, Flex, Heading, Text, Input, InputGroup, Icon, Button, Box} from "@chakra-ui/react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ActionButton from 'antd/lib/modal/ActionButton';


function AuthForm(props){
    const {inputs, title, buttonText, actionButton, loading} = props
    return(
        <Flex
        //Estilos del box del registro
            boxSizing="border-box"
            py={100}
            px={[5,24,32,32]}
            direction="column"
            align="center"
            textAlign="center"
            boxShadow="2xl"
            w={['35%']}
            borderRadius="lg"
            position="relative"
            color="blackAlpha.900"
            >
            <Heading
                d="flex"
                marginBottom="15%"
                fontFamily="body"
            >
                {title}
            </Heading>
            <Box
                as = "form"
                w = "100%"
                d = "flex"
                flexDirection = "column"
            >
                {inputs.map((input, idx)=>(
                    <Box
                        d="flex"
                        w="100%"
                        flexDirection = "row"
                        justifyContent="space-around"
                        alignContent="center"
                        alignItems="center"
                        key={idx}
                    >
                        <InputGroup
                            w="85%"
                            size="md"
                        >
                            <Input
                                {...input.control}
                                type={input.type}
                                placeholder={input.placeholder}
                                icon={input.icon}
                                mb={7}
                                variant="filled"
                                backgroundColor="blue.500"
                            />
                        </InputGroup>
                    </Box>
                ))}
                <Button
                    mt={10}
                    onClick={actionButton}
                    isLoading={loading}
                    width="30%"
                    size="lg"
                    backgroundColor="yellow.500"
                    variant="solid"
                    type="submit"
                    alignSelf="center"
                    boxShadow="xl"
                >
                {buttonText}</Button>
                {
                    //Condicionante para cambio de pagina signup/login
                    title === 'Login' ?
                    <Box
                        d="flex"
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        marginTop="20%"
                    ><Text>Create an account</Text><Link to = "/signup">&nbsp; here</Link></Box>
                    :title === 'Register' ?
                    <Box
                        d="flex"
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        marginTop="20%"
                    ><Text>If you have an account</Text><Link to = "/">&nbsp;Log in</Link></Box>
                    : null
                }
            </Box>
        </Flex>
    )
}

export default AuthForm