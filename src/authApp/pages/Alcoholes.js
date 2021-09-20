import React from 'react';
import {Text, Box, Flex} from '@chakra-ui/react'
import Card from '../../components/Card/card'
import Footer from '../../components/Footer/footer'

export default function Aguamielera(){
    return(
    <Box>
         <Flex
        justifyContent="space-evenly"
        flexWrap="wrap"
        flexDirection="row"
        alignItems="space-between"
        >
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </Flex>
        <Footer/>
    </Box>
       
    )
}