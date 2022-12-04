import Navigation from '@/components/Layouts/Navigation'
import { useAuth } from '@/hooks/auth'

type Props = {
    header: React.ReactNode
    children?: React.ReactNode
};


const AppLayout: React.FC<Props> = ({ header, children }) => {

    const { user } = useAuth({ middleware: 'auth' })

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Navigation user={user} />

            {/* Page Heading */}
            <header className="dark:bg-gray-900 bg-white shadow dark:shadow-slate-800">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    {header}
                </div>
            </header>

            {/* Page Content */}
            <main>{children}</main>
        </div>
    )
}

export default AppLayout