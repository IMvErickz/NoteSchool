import { Trash2 } from "lucide-react"
import { AlertModal } from "./AlertDialog"
import { ReactNode, useContext } from "react"
import { DataProps, NoteContext } from "../context/noteContext"

interface NoteProps {
    id: string
    Title: string
    description: string
    element: DataProps
}

export function NoteComponent(props: NoteProps) {

    const { handleDeleteNote } = useContext(NoteContext)

    return (
        <div className='w-max h-36 bg-zinc-700 flex flex-col items-center justify-center p-4 rounded-lg gap-y-8'>
            <div className="w-full flex flex-row items-center justify-center">
                <h1 className='text-bgButton text-4xl'>{props.Title}</h1>
                <button className="bg-transparent" onClick={() => handleDeleteNote(props.element)}>
                    <Trash2 color="#DD0E0E" />
                </button>
            </div>
            <AlertModal
                Title={props.Title}
                id={props.id}
                description={props.description}
            />
        </div>
    )
}