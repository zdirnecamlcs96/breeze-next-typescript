import Link from 'next/link'
import { Menu } from '@headlessui/react'
import { MouseEventHandler } from 'react';
import { Url, UrlObject } from 'url';

type Props = {
    href: Url | UrlObject | string
    children: React.ReactNode
    props?: any
    onClick?: MouseEventHandler
};


const DropdownLink = ({ children, ...props }: Props) => (
    <Menu.Item>
        {({ active }) => (
            <Link
                {...props}
                className={`w-full text-left block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-100 ${
                    active ? 'bg-gray-100' : ''
                } focus:outline-none transition duration-150 ease-in-out`}>
                {children}
            </Link>
        )}
    </Menu.Item>
)

export const DropdownButton = ({ children, ...props }: Props) => (
    <Menu.Item>
        {({ active }) => (
            <button
                className={`w-full text-left block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-100 ${
                    active ? 'bg-gray-100 dark:bg-slate-500' : ''
                } focus:outline-none transition duration-150 ease-in-out`}
                {...props}>
                {children}
            </button>
        )}
    </Menu.Item>
)

export default DropdownLink