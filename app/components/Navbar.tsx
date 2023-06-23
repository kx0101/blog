'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";
import HorizontalBar from "../components/HorizontalBar";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <>
            <HorizontalBar />
            <nav className="p-4 mt-8 top-0 drop-shadow-xl z-10">
                <div className="mx-auto flex flex-col sm:flex-row items-center justify-center">
                    <div className="flex flex-row text-xl text-white m-4 sm:m-0">
                        <NavLink href="/" isActive={pathname === "/"}>Home</NavLink>

                        <NavLink href="/about" isActive={pathname === "/about"}>About</NavLink>

                        <NavLink href="/contact" isActive={pathname === "/contact"}>Contact</NavLink>
                    </div>
                </div>
            </nav>
        </>
    );
}

// @ts-ignore
function NavLink({ href, isActive, children }) {

    return (
        <Link href={href} passHref className={`mx-6 ${isActive ? "text-blue-500" : ""} relative group hover:text-blue-300 ${isActive ? "pointer-events-none" : ""}`}>
            {children}

            <div
                className={`h-1 mt-1 ${isActive
                        ? "bg-blue-500 animate-slideLeft"
                        : "bg-blue-300 hover:bg-blue-300 opacity-0 group-hover:opacity-100"
                    } rounded-full`}
            />

        </Link>
    );
}
