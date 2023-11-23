import { Dispatch, ReactNode, createContext, useState } from 'react'
import { api } from '../../lib/axios'
import { v4 } from 'uuid'

export interface DataProps {
    id?: string
    Title?: string
    description?: string
}

interface NoteDataProps {
    Title: string
    description: string
}

interface NoteProps {
    data: DataProps[]
    setData: Dispatch<React.SetStateAction<DataProps[]>>
    getNotes: (id: string) => Promise<void>
    handleCreateNote: (id: string) => Promise<void>
    handleDeleteNote: (element: DataProps) => Promise<void>
}

interface ProviderProps {
    children: ReactNode
}

export const NoteContext = createContext({} as NoteProps)

export function NoteProvider({ children }: ProviderProps) {

    const [data, setData] = useState<DataProps[]>([])

    async function getNotes(id: string) {
        await api.get(`/userNotes/${id}`)
            .then(function (response) {
                setData(response.data.notes)
            })

    }

    async function handleCreateNote(id: string) {
        let noteID = v4()

        setData([...data, {
            Title: 'Titulo da nota',
            description: 'Descrição da nota',
            id: noteID
        }])

        await api.post(`/note/${id}`, {
            Title: 'Titulo da nota',
            description: 'Descrição da nota',
            idNote: noteID
        })

    }

    async function handleDeleteNote(element: DataProps) {

        const index = data.indexOf(element)
        console.log(index)

        if (index != -1) {
            data.splice(index, 1)
            setData([...data])
        }


        await api.delete(`/deleteNote/${element.id}`)
    }


    return (
        <NoteContext.Provider value={{ data, setData, getNotes, handleCreateNote, handleDeleteNote }}>
            {children}
        </NoteContext.Provider>
    )
}