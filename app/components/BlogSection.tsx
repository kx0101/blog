import React from 'react';
import Posts from './Posts';
import { Spinner } from './Spinner';
import { Meta } from '@/types';

type BlogSectionProps = {
    searchQuery: string;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    filteredPosts: Meta[];
    loading: boolean;
}

const BlogSection: React.FC<BlogSectionProps> = ({ searchQuery, handleInputChange, filteredPosts, loading }) => {

    return (
        <section className="mt-12 mx-auto max-w-2xl">
            <div className="text-center">
                <h2 className="text-5xl font-bold mt-24 mb-4 text-white">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                        Blog
                    </span>
                </h2>
                <hr className="mb-16" />
            </div>
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search for a blogpost"
                    value={searchQuery}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-md bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <span className="absolute right-3 top-2 text-gray-500">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-search w-5 h-5"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                </span>
            </div>
            {loading ? (
                <Spinner />
            ) : (
                <ul className="space-y-8">
                    <Posts posts={filteredPosts} />
                </ul>
            )}
        </section>
    );
};

export default BlogSection;
