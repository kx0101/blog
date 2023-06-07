import Link from "next/link";
import HorizontalBar from "../components/HorizontalBar";

export default function Navbar() {
    return (
        <>
            <HorizontalBar />
            <nav className='p-4 mt-8 top-0 drop-shadow-xl z-10'>
                <div className="mx-auto flex flex-col sm:flex-row items-center justify-center">
                    <div className="flex flex-row text-xl text-white m-2 sm:m-0">
                        <div className="mx-2 hover:underline" style={{ cursor: "not-allowed" }}>
                            About
                        </div>

                        <div className="mx-2 hover:underline" style={{ cursor: "not-allowed" }}>
                            Projects
                        </div>

                        <div className="mx-2 hover:underline" style={{ cursor: "not-allowed" }}>
                            Contact
                        </div>

                        {/* 
                        <Link href="/about" className="mx-2 hover:underline">
                            About
                        </Link>
                        <Link href="/projects" className="mx-2 hover:underline">
                            Projects
                        </Link>
                        <Link href="/contact" className="mx-2 hover:underline">
                            Contact
                        </Link>
                        */}
                    </div>
                </div>
                <h4 className="flex justify-center font-bold text-white md:m-0">
                    The above pages are coming soon!
                </h4>
            </nav>

            <h1 className="flex justify-center text-3xl font-bold text-white md:m-0">
                <Link passHref href="/" className="text-white/90 no-underline mb-8 hover:text-white hover:underline">
                    Elijah Koulaxis
                </Link>
            </h1>
        </>
    );
}
