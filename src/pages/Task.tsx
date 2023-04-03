import { useEffect, useState, FormEvent } from "react";
import { api } from "../../lib/axios";
import { Input } from "../components/Input";
import { NavBar } from "../components/NavBar";
import { useQuery } from "react-query";
import { Checkbox } from "../components/Checkbox";
import { LockLaminated } from "phosphor-react";
import { Link } from "react-router-dom";
import { List } from "../assets/List";
import {Vite} from '../../public/vite'

interface TaskProps{
    id: string
    Title: string
}

export function Task() {

    const [title, setTitle] = useState('')
    const [del, setIdDel] = useState('')

    const token = localStorage.getItem('userToken')

    const {data} = useQuery<TaskProps[]>('Taks', async () => {
        const response = await api.get(`/userTasks/${token}`)

        return response.data.tasks
    })
    
    useEffect(() => {
        setIdDel(localStorage.getItem('index') as string)
        console.log(del)
      });

    localStorage.getItem('index')
    console.log(del)

    async function Delete() {
        try {
            await api.delete(`/deleteTask/${del}`)
            localStorage.removeItem('index')
            location.reload()
        } catch (error) {
            console.log(error)
            throw error 
       }
   }

    async function setTask(event: FormEvent) {
        event.preventDefault()

        try {
            await api.post(`/task/${token}`, {
                Title: title
            })
            location.reload()
        } catch (error) {
            console.error(error)
            throw error
       }
    }
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-background">
            <nav>
                <NavBar
                element={<Link to='/Note'><img src="../../public/copy-writing.png" className="w-20" alt="" /></Link>}
                />
            </nav>
            <div className="w-full h-full flex flex-col items-center justify-center gap-y-12">
                <h1 className="text-bgButton text-6xl">To-Do List</h1>
                <div className="w-full flex flex-col items-center justify-center gap-y-8">
                    {del ?
                    <button onClick={Delete} className="bg-red-700 px-4 py-2 rounded-lg text-white font-semibold hover:bg-red-500">Deletar</button>    
                    : ""}
                    <form onSubmit={setTask} className="w-full flex flex-col items-center justify-center gap-y-8">
                        <Input
                            placeholder="O que você quer fazer hoje?"
                            onChange={e => setTitle(e.target.value)}
                        />
                        <button type="submit" className="bg-bgButton text-white font-bold py-2 px-8 rounded-lg hover:bg-green-300 hover:text-black">
                            Confirmar
                        </button>
                    </form>
                </div>
                <div className="w-full flex flex-col items-center justify-center">
                    {data?.map(e => {
                        return (
                            <div className="w-full flex flex-row items-start justify-start gap-x-4">
                                <div className="w-full flex flex-col place-items-end justify-center">
                                    <Checkbox onClick={() => {
                                        localStorage.setItem('index', e.id)
                                    }} id={e.id} />
                                </div>
                                <div className="w-full flex-col items-center justify-center">
                                    <label id={e.id} className="text-white text-xl" htmlFor={e.id}>{e.Title}</label>
                               </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}