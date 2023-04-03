import { FormEvent, useState } from "react";
import Logo from "../assets/Logo";
import { Input } from "../components/Input";
import { api } from "../../lib/axios";
import {useNavigate} from 'react-router-dom'

export function Register() {

    const [name, getName] = useState('')
    const [email, getEmail] = useState('')
    const [password, getPassword] = useState('')

    const navigation = useNavigate()

    async function registerUser(event: FormEvent) {

        event.preventDefault()

        try {
            await api.post('/user/register', {
                Name: name,
                email: email,
                password: password
            })

            navigation('/Login')
        } catch (error) {
            console.log(error)
            throw error
        }
    }


    return (
        <div className="w-screen h-screen bg-background flex flex-col items-center justify-center gap-y-12">
            <Logo />
            <h1 className="text-white font-semibold text-6xl">Cadastro</h1>
            
            <form onSubmit={registerUser} className="w-full flex flex-col items-center justify-center gap-y-8">
                <Input required placeholder="Nome" onChange={e => getName(e.target.value)}/>
                <Input required type="email" placeholder="email" onChange={e => getEmail(e.target.value)}/>
                <Input required type='password' placeholder="Senha" onChange={e => getPassword(e.target.value)} />
                
                <button type="submit" className="bg-bgButton text-white font-bold py-2 px-12 rounded-lg hover:bg-green-300 hover:text-black">Cadastrar</button>
            </form>
            
        </div>
    )
}