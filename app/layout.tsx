import './globals.css'
import { FaGithub, FaLinkedin, FaTwitch } from "react-icons/fa";
import Navbar from './components/Navbar'
import ScrollToTopButton from './components/ScrollToTopButton'

export const metadata = {
    title: "Elijah Koulaxis",
    description: 'Created by Elijah',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const currentYear = new Date().getFullYear();

    return (
        <html lang="en">
            <body className="bg-gray-900 text-gray-100">
                <Navbar />
                <main className="px-4 md:px-6 mx-auto max-w-3xl">{children}</main>

                <footer className="py-4 text-center">
                    <div className="flex justify-center space-x-4 mt-4 mb-4">
                        <a target="_blank" href="https://github.com/kx0101" className="text-2xl text-white hover:text-blue-400">
                            <FaGithub />
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/elijah-koulaxiskx/" className="text-2xl text-white hover:text-blue-400">
                            <FaLinkedin />
                        </a>

                        <a target="_blank" href="https://twitch.tv/elijahkx" className="text-2xl text-white hover:text-blue-400">
                            <FaTwitch />
                        </a>
                    </div>
                    <p className="text-gray-400 text-sm">
                        &copy; {currentYear} Elijah Koulaxis. Personal website
                    </p>

                    <p className="mt-2 text-gray-400 text-sm">
                        Made with Next.js, Tailwind and hosted on Vercel
                    </p>
                </footer>

                <ScrollToTopButton />
            </body>
        </html>
    );
}
