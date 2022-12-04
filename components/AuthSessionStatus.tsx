type Props = {
    className?: string
    status?: string | null
}

const AuthSessionStatus = ({ status, className, ...props }: Props) => (
    <>
        {status && (
            <div
                className={`${className} font-medium text-sm text-green-600`}
                {...props}>
                {status}
            </div>
        )}
    </>
)

export default AuthSessionStatus