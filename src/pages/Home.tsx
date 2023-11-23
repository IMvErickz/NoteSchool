
import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { useEffect, useState } from "react";

export function Home() {

    const [name, getName] = useState('')
    const [id, setId] = useState('')

    useEffect(() => {
        getName(localStorage.getItem('Name') as string)
        setId(localStorage.getItem('userToken') as string)
    }, [])

    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center bg-background'>
            <header>
                <nav>
                    <NavBar />
                </nav>
            </header>
            <div className="w-full h-full flex flex-col items-center justify-center gap-y-12">
                <div className="w-full flex flex-row items-center justify-center">
                    <h1 className="text-6xl text-bgButton">Saudações Estudante!</h1>
                </div>
                <div className="w-full flex flex-col items-center justify-center gap-y-8">
                    <p className="text-center text-white text-4xl">
                        Aqui na <span className="text-bgButton">NoteSchool</span>, você tem acesso a diversas ferramentas <br />
                        para auxiliar nosso seus estudos, entre com a sua conta, <br />
                        ou crie uma se for novo e venha conferir!
                    </p>

                    {
                        name ? <div>
                            <Link to={`/note/${id}`}><h1 className="text-bgButton text-4xl">Ir para as Notas</h1></Link>
                        </div>
                            : ""
                    }
                </div>
            </div>
        </div>
    )
}