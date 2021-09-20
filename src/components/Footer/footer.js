import { Box, Stack, Divider } from '@chakra-ui/react'
import * as React from 'react'
import  Copyright  from './copyright'
import  Logo  from './logo'
import  SocialMediaLinks  from './socialmedialinks'

export default function App (){
    return(
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    maxW="7xl"
    py="12"
    px={{
      base: '4',
      md: '8',
    }}
  >
  <Divider/>
    <Stack
    marginTop="20px">
      <Stack direction="row" spacing="4" align="center" justify="space-between">
        <Logo />
        <SocialMediaLinks />
      </Stack>
      <Copyright
        alignSelf={{
          base: 'center',
          sm: 'start',
        }}
      />
    </Stack>
  </Box>
    )
}