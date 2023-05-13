import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
    title: "Elijah's Blog",
    description: 'Created by Elijah',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className='bg-slate-800'>
                <Navbar />
                <main className='px-4 md:px-6 prose prose-xl prose-invert mx-auto'>
                    {children}
                </main>
            </body>
        </html>
    )
}
