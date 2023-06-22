'use client';

import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Profile from './components/Profile';
import BlogSection from './components/BlogSection';
import useFetchPosts from './hooks/useFetchPosts';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const { filteredPosts, loading, handleSearch } = useFetchPosts();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;

        setSearchQuery(query);
        handleSearch(query);
    };

    return (
        <>
            <main className="mx-auto">
                <div className="mt-12 flex flex-col sm:flex-row items-center">
                    <Profile />
                    <div className="sm:w-1/2 mt-8 sm:mt-0">
                        <h1 className="text-3xl mt-8 font-bold text-white text-left align-left">
                            <span className="block">👋 I&apos;m Elijah!</span>
                        </h1>
                        <p className="text-lg mt-8 text-white text-left align-left">
                            I&apos;m currently a fourth-year Computer Science student at the University of Thessaly, and I work as a Junior Software Engineer at{' '}
                            <a
                                target="_blank"
                                className="text-blue-400 underline"
                                href="https://www.netcompany-intrasoft.com/"
                            >
                                Netcompany-Intrasoft
                            </a>
                            .
                        </p>

                        <p className="text-lg mt-4 text-white text-left align-left">
                            I thrive on taking on technical challenges and building software for diverse platforms. With a deep curiosity for understanding the inner workings of technology, I constantly explore the intricacies of software development. I&apos;m especially passionate about optimizing performance and conducting benchmarking to push the boundaries of what&apos;s possible.
                        </p>
                    </div>
                </div>

                <BlogSection
                    searchQuery={searchQuery}
                    handleInputChange={handleInputChange}
                    filteredPosts={filteredPosts}
                    loading={loading}
                />

            </main>
            <Analytics />
        </>
    );
};

export default Home;
