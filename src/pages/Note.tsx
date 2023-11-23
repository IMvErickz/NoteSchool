import { Link, useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { ModalDialog } from "../components/Dialog";
import { NavBar } from "../components/NavBar";
import { useState, useEffect, useContext } from "react";
import { NoteComponent } from "../components/Note";
import { NoteContext } from "../context/noteContext";

export function Note() {

    const { data, getNotes, handleCreateNote } = useContext(NoteContext)

    const { id } = useParams()

    useEffect(() => {
        getNotes(id as string)
    }, [])

    return (
        <div className="w-screen h-screen flex flex-col items-center jusitify-center bg-background">
            <nav>
                <NavBar />
            </nav>

            <div className="w-full flex flex-col items-center justify-center gap-y-8">
                <h1 className="text-6xl text-bgButton">Notes</h1>
                <button onClick={() => handleCreateNote(id as string)} className="bg-bgButton hover:bg-green-800 transition-colors text-white font-semibold px-2 py-3 rounded-lg">Adicionar Nota</button>
            </div>

            <div className="w-full h-full items-center justify-center grid sm:grid-rows-1 md:grid-rows-2 grid-rows-4 grid-flow-col gap-4">
                {data.map((e) => {
                    return (
                        <NoteComponent
                            element={e}
                            key={e.id}
                            Title={e.Title as string}
                            id={e.id as string}
                            description={e.description as string}
                        />
                    )
                })}
            </div>
        </div>
    )
}