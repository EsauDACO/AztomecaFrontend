import React from 'react'
import {Box, Flex} from '@chakra-ui/react'

export default function PageSection({children}){
    return(
        <Flex
        as="section"
        position="absolute"
        color="black.500"
        py={120}
        h="100%"
        >
            {children}
        </Flex>
    )
}