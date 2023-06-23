import Link from "next/link";
import HorizontalBar from "../components/HorizontalBar";

export default function Navbar() {
    return (
        <>
            <HorizontalBar />
            <nav className="p-4 mt-8 top-0 drop-shadow-xl z-10">
                <div className="mx-auto flex flex-col sm:flex-row items-center justify-center">
                    <div className="flex flex-row text-xl text-white m-4 sm:m-0">
                        <Link href="/" className="mx-6 hover:underline" passHref>
                            Home
                        </Link>

                        <Link href="/about" className="mx-6 hover:underline" passHref>
                            About
                        </Link>

                        <Link href="/contact" className="mx-6 hover:underline">
                            Contact
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
