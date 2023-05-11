import './globals.css'
import Navbar from './components/Navbar'
import ProfilePic from './components/ProfilePic'

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
                <ProfilePic />
                {children}
            </body>
        </html>
    )
}
