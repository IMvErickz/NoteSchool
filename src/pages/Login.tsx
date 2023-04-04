import { FormEvent, useState } from "react";
import Logo from "../assets/Logo";
import { Input } from "../components/Input";
import { api } from '../../lib/axios'
import {Link, useNavigate} from 'react-router-dom'

interface InfoProps{
    Name: string
    email: string
    password: string 
    createdAt: Date
    id: string
}

export function Login() {

    const navigation =  useNavigate()


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [info, getInfo] = useState<InfoProps[]>([])
    
    async function login(e: FormEvent) {

    e.preventDefault()


        try {
            api.get(`/user/${email}`)
            .then(function (response) {
            getInfo(response.data.user)
            })
        
        info.map(e => {
            if (e.password != password) {
                alert('nao')
            } else {
                localStorage.setItem('userToken', e.id)
                localStorage.setItem('Name', e.Name)
                 navigation('/Task')
            }
        })
        } catch (error) {
            console.error(error)
            throw error
        }
    }
    return(
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-background gap-y-12">
            <div className="w-full flex flex-col items-center justify-center">
                <Logo />
                <h1 className="text-white text-6xl font-semibold">Login</h1>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-y-8">
                <form onSubmit={login} className="w-full flex flex-col items-center justify-center gap-y-8">
                <Input
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                        placeholder="Senha"
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                />
        
                    <button type="submit" className="bg-bgButton text-white font-bold py-2 px-12 rounded-lg hover:bg-green-300 hover:text-black">Entrar</button>
                    <Link to={'/Register'}><span className="text-bgButton">Não tem conta? Cadastre-se aqui</span></Link>
                
               </form>
            </div>
        </div>
    )
}