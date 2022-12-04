import { ChangeEventHandler } from "react"

type Props = {
    id?: string
    name?: string
    type?: string
    value?: string | string[]
    className?: string
    disabled?: boolean
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined
    required?: boolean
    autoFocus?: boolean
    autoComplete?: string
}

const Input = ({ disabled = false, className, ...props }: Props) => (
    <input
        disabled={disabled}
        className={`${className} px-3 py-1 dark:text-white rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
        {...props}
    />
)

export default Input