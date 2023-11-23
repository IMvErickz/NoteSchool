import * as AlertDialog from '@radix-ui/react-alert-dialog';
import '../assets/styles.css';
import { api } from '../../lib/axios';
import { useNavigate } from 'react-router-dom'

interface AlertProps {
  id: string
  Title: string
  description: string
}

export function AlertModal(props: AlertProps) {

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button className='bg-zinc-600 rounded-lg py-2 px-4 text-bgButton'>Abrir</button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="AlertDialogOverlay" />
        <AlertDialog.Content className="AlertDialogContent">
          <div className='w-full flex flex-col items-center justify-center gap-y-4'>
            <AlertDialog.Title className="text-white text-4xl">{props.Title}</AlertDialog.Title> <br />
            <AlertDialog.Description className="text-white text-4xl">
              {props.description}
            </AlertDialog.Description> <br />
            <AlertDialog.Description className="text-white text-4xl">
            </AlertDialog.Description>
          </div><br />
          <div className='w-full flex flex-row items-center justify-center gap-x-16'>
            <AlertDialog.Action asChild>
              <button className="bg-blue-700 text-white font-bold items-center justify-center text-center w-32 h-10 rounded-2xl">Fechar</button>
            </AlertDialog.Action>
            <button className="bg-blue-700 text-white font-bold items-center justify-center text-center w-32 h-10 rounded-2xl">Editar</button>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}