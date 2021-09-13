import {useState} from 'react';

export default function useForm(){
    const [form, setForm] = useState({})
    const handleInput = e => {
        e.persist()
        setForm(prevState => ({...prevState.State,
            [e.target.name]: e.target.value
        }))
    }

    return [form, handleInput]
}