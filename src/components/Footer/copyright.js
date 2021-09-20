import { Text } from '@chakra-ui/layout'
import * as React from 'react'

export default function Copyright(props){
    return(
  <Text fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} Comercializadora y Distribuidora Aztomeca, S.A. de C.V., All rights reserved.
  </Text>
    )
}