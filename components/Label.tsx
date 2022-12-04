type Props = {
    className?: string
    children: React.ReactNode
    htmlFor: string
}

const Label = ({ className, children, ...props }: Props) => (
    <label
        className={`${className} block font-medium text-sm text-gray-700`}
        {...props}>
        {children}
    </label>
)

export default Label