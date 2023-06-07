'use client';
import React from 'react';
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        setShowButton(scrollTop > 200);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    if (!showButton) {
        return null;
    }

    return (
        <button
            className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={scrollToTop}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 inline-block mr-1"
            >
                <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
            Scroll to Top
        </button>
    );
}
