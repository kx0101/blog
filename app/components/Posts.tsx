'use client'

import React from 'react';
import ListItem from './ListItem';
import { Meta } from '@/types';

export default function Posts({ posts }: { posts: Meta[] }) {
    return (
        <>
            {posts.map((post) => (
                <ListItem key={post.title} post={post} />
            ))}
        </>
    );
}
