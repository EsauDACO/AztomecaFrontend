import React from 'react';
import {Box, Image,Spacer, Center, Flex, Text, Divider} from '@chakra-ui/react';

export default function Images (){
    return(
        <Box>
            <Box>
            <Image
                src="https://res.cloudinary.com/dxabmmloo/image/upload/v1631552380/Aztomeca_pages-to-jpg-0004_fggzsn.jpg" alt="Vision"
            />
            </Box>
            <Spacer/>
            <Image
                src="https://res.cloudinary.com/dxabmmloo/image/upload/v1631552380/Aztomeca_pages-to-jpg-0003_dardcz.jpg"    alt="Mision"
            />
            <Image
                src="https://res.cloudinary.com/dxabmmloo/image/upload/v1631552380/Aztomeca_pages-to-jpg-0005_zuzgw3.jpg" alt="Valores"
            />
        </Box>
    )
}