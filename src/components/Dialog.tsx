import * as Dialog from '@radix-ui/react-dialog';
import '../assets/Dialog.css'
import { useState, FormEvent } from 'react';
import { api } from '../../lib/axios';
import {useNavigate} from 'react-router-dom'

export function ModalDialog() {

    const [Title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const token = localStorage.getItem('userToken')

    const navigation = useNavigate()


    async function newNote(event: FormEvent) {

        event.preventDefault()

        try{
            await api.post(`/note/${token}`, {
                Title,
                description
            })

            navigation('/Note')
        } catch (erro) {
            console.error(erro)
            throw erro
        }
    }

    return (
        <Dialog.Root>
    <Dialog.Trigger asChild>
    <button className="bg-bgButton text-white font-semibold px-2 py-3 rounded-lg">Adicionar Nota</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent gap-x-12">
        <Dialog.Title className="text-bgButton text-4xl font-semibold">Nova Nota</Dialog.Title>
        <Dialog.Description className="text-white text-xl">
        </Dialog.Description>
        <form onSubmit={newNote}>
            <fieldset className="Fieldset">
            <label className="text-bgButton " htmlFor="name">
                Título
            </label>
            <input onChange={e => setTitle(e.target.value)} className="bg-zinc-600 rounded-lg text-white py-2 placeholder:text-black placeholder:font-semibold" placeholder='Título'/>
            </fieldset>
            <fieldset className="Fieldset">
            <label className="text-bgButton " htmlFor="username">
                Descrição
            </label>
            <input onChange={e => setDescription(e.target.value)} className="bg-zinc-600 rounded-lg text-white py-2 placeholder:text-black placeholder:font-semibold" placeholder='Descrição' />
            </fieldset>
            <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
                <button type="submit" className="bg-bgButton py-2 px-4 text-black font-semibold rounded-lg">Adicionar Nota</button>
            </div>
        </form>
        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            X
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
    )
}