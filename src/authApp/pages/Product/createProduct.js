import React, {useState} from "react";
import {Box, Button, heading, Flex, Image, Text, FormLabel, Select, Input} from '@chakra-ui/react';
import useForm from '../../../hooks/useForm';
import handleAsync from '../../../utils/handleAsync';
import MY_SERVICE from '../../../services';
import PRODUCT_SERVICE from '../../../services/prodcuts_service';
import { useHistory } from 'react-router-dom';

export default function createProdcut(props){
    const [form, handleInput] = useForm()
    const[docs, setDocs] = useState([])
    const brands = [{value:'Juhue', key:1},{value:'Yutsil', key:2},{value:'Aguamielera', key: 3},{value:'Kofi Bar', key:4},{value:'Otro'} ]
    const history = useHistory()
    const handleDocs = async(e) => {
        const formData = new FormData()

        for(let key in e.tarjet.files[key])
    }

    const response = await handleAsync(() =>)
}