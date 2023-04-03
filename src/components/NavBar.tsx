import Logo from "../assets/Logo";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

interface NavProps{
    element?: JSX.Element
}

export function NavBar(props: NavProps) {

    const navigation = useNavigate()

    const userName = localStorage.getItem('Name')

    function logout() {
        localStorage.removeItem('Name')
        localStorage.removeItem('userToken')
        navigation('/')
    }

    return (
        <nav className='w-screen h-20 flex flex-row items-center justify-center bg-black'>
            <div className="w-full flex flex-col items-center justify-center">
                <Logo/>
            </div>
            <div className="p-4">
                {props.element}
            </div>
            <div className="flex flex-row items-end justify-end">
                {userName ?
                    <div className=" w-full flex flex-row gap-x-8">
                        <span className="text-bgButton text-2xl font-bold">Olá {userName}</span>
                        <button onClick={logout} className="bg-bgButton p-2 rounded text-white">sair</button>
                    </div>
                    :  <Link to='/Login'>
                    <button className="bg-bgButton text-white font-bold py-2 px-8 rounded-lg hover:bg-green-300 hover:text-black">Entrar</button>
                    </Link>}
            </div>
        </nav>
    )
}