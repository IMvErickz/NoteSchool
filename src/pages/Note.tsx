import { Link, useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { AlertModal } from "../components/AlertDialog";
import { ModalDialog } from "../components/Dialog";
import { NavBar } from "../components/NavBar";
import { useState, useMemo } from "react";

interface DataProps {
    id: string
    Title: string
    description: string
}

export function Note() {
    const [note, getNote] = useState<DataProps[]>([])
    const token = localStorage.getItem('userToken')

    const { id } = useParams()

    const memory = useMemo(() => {
        setInterval(() => {
            api.get(`/userNotes/${id}`)
                .then(function (response) {
                    getNote(response.data.notes)
                })
        }, 2000)

    }, [])


    return (
        <div className="w-screen h-screen flex flex-col items-center jusitify-center bg-background">
            <nav>
                <NavBar
                    element={<Link to='/Task'><h1 className="text-bgButton font-semibold text-xl">Task</h1></Link>}
                />
            </nav>

            <div className="w-full flex flex-col items-center justify-center gap-y-8">
                <h1 className="text-6xl text-bgButton">Notes</h1>
                <ModalDialog />
            </div>

            <div className="w-full h-full items-center justify-center grid sm:grid-rows-1 md:grid-rows-2 grid-rows-4 grid-flow-col gap-4">
                {note.map(e => {
                    return (
                        <AlertModal
                            Title={e.Title}
                            description={e.description}
                            id={e.id}
                        />
                    )
                })}
            </div>
        </div>
    )
}