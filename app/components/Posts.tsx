import ListItem from './ListItem';
import { Meta } from '@/types';

export default function Posts({ posts }: { posts: Meta[] }) {
    if (posts.length === 0) {
        return (
            <div className="flex justify-center items-center mt-8">
                <h3 className="text-2xl font-bold text-gray-700">No posts found</h3>
            </div>
        )
    }

    return (
        <>
            {posts.map((post) => (
                <ListItem key={post.title} post={post} />
            ))}
        </>
    );
}
