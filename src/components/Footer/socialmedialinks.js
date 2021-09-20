import { ButtonGroup, IconButton } from '@chakra-ui/react'
import * as React from 'react'
import { FaWhatsappSquare, FaInstagram, FaFacebook} from 'react-icons/fa'

export default function SocialMediaLinks(props){
    return(
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton as="a" href="https://www.facebook.com/aztomecamx" aria-label="Facebook" icon={<FaFacebook fontSize="40px" />} />
    <IconButton as="a" href="https://www.instagram.com/aztomeca_mx/" aria-label="Instagram" icon={<FaInstagram fontSize="40px" />} />
    <IconButton as="a" href="https://api.whatsapp.com/send?phone=5580097493" aria-label="Whatsapp" icon={<FaWhatsappSquare fontSize="30px" />} />
  </ButtonGroup>
    )
}
