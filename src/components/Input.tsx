import { FC } from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    placeholder: string
}

export const Input: FC<InputProps> = ({placeholder, ...rest}) => {
    return (
        <input type="text" className="w-72 p-2 rounded-lg bg-zinc-700 text-white"
            placeholder={placeholder}
            {...rest}
        />
    )
}