import React, { useState, useEffect } from 'react';
import { Meta } from '../../types';

const useFetchPosts = () => {
    const [initialPosts, setInitialPosts] = useState<Meta[]>([]);
    const [filteredPosts, setFilteredPosts] = useState<Meta[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInitialPosts = async () => {
            const response = await fetch("/api/posts");
            const { posts } = await response.json();

            setInitialPosts(posts);
            setFilteredPosts(posts);
            setLoading(false);
        };

        fetchInitialPosts();
    }, []);

    const handleSearch = (query: string) => {
        const filtered = initialPosts.filter(post =>
            post.title.toLowerCase().includes(query.toLowerCase())
        );

        setFilteredPosts(filtered);
    };

    return { filteredPosts, loading, handleSearch };
};

export default useFetchPosts;
