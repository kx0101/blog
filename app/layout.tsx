import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
    title: "Elijah's Blog",
    description: 'Created by Elijah',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-gray-900 text-gray-100">
                <Navbar />
                <main className="px-4 md:px-6 mx-auto max-w-3xl">{children}</main>
            </body>
        </html>
    );
}
