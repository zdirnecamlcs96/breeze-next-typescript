import Head from 'next/head'

type Props = {
    children?: React.ReactNode
};

const GuestLayout: React.FC<Props> = ({ children }) =>
    <div>
        <Head>
            <title>Laravel</title>
        </Head>

        <div className="font-sans text-gray-900 antialiased">
            {children}
        </div>
    </div>


export default GuestLayout