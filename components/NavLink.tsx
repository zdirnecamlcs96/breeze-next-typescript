import Link from 'next/link'

type Props = {
    href: string
    active: boolean
    children: React.ReactNode
}

const NavLink = ({ active = false, children, ...props }: Props) => (
    <Link
        {...props}
        className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out ${
            active
                ? 'dark:text-gray-100 border-indigo-400 text-gray-900 focus:border-indigo-700'
                : 'border-transparent dark:text-gray-400 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300'
        }`}>
        {children}
    </Link>
)

export default NavLink