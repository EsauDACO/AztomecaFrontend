import React from 'react'
import Slider from '../../components/Slider/slider'
import {Box, Divider} from '@chakra-ui/react'
import Images from '../../components/Imagenes/imagenes';
import Footer from '../../components/Footer/footer'

export default function Inicio(){
    return(
        <Box
        flexDirection="column"
        align="center"
        backgroundColor="blue.500">
                <Slider/>
                <Divider/>
                <Images/>
                <Footer/>
        </Box>
    )
}