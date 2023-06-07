'use client';
import { useEffect, useState } from "react";
import React from 'react';

export default function HorizontalBar() {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const documentHeight = document.documentElement.scrollHeight;

        const totalScroll = documentHeight - windowHeight;
        const percentage = (scrollTop / totalScroll) * 100;

        setScrollPercentage(percentage);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return <div className="horizontal-bar" style={{ width: `${scrollPercentage}%` }} />;
}
