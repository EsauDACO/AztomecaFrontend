import React from 'react';
import {Flex, Heading, Text, Image, Input, InputGroup, Box, Button, ButtonGroup} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

function productForm(props){
    const {title, description, loading, buttonText, actionButton, Image} = props
    return(
        <Flex>
            <Heading>
                {title}
            </Heading>
            <Image/>
            <Input>
                {description}
            </Input>
            <Box>
                <Button
                variant="ghost"
                ></Button>
            </Box>
        </Flex>
    )
}

export default productForm