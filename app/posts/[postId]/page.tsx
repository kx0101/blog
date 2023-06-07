import getFormattedDate from "@/lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "@/lib/posts"
import Link from "next/link";
import { notFound } from 'next/navigation';
import 'highlight.js/styles/github-dark.css';

export function generateMetadata({ params }: { params: { postId: string } }) {
    const posts = getSortedPostsData();
    const { postId } = params;

    const post = posts.find(post => post.id === postId);

    if (!post) {
        return {
            title: 'Post Not Found',
        }
    }

    return {
        title: post.title,
    }
}

export default async function Post({ params }: { params: { postId: string } }) {
    const posts = getSortedPostsData();
    const { postId } = params;

    const post = posts.find((p) => p.id === postId);

    if (!post) {
        return notFound();
    }

    const { meta, content } = await getPostData(postId);

    const pubDate = getFormattedDate(meta.date);

    const tags = meta.tags.map((tag: any, i: number) => (
        <Link passHref key={i} href={`/tags/${tag}`} className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-2 py-1 rounded mr-2 mb-2 whitespace-nowrap overflow-hidden overflow-ellipsis">
            {tag}
        </Link>
    ));

    return (
        <>
            <h1 className="text-4xl font-bold mb-4 mt-4">{meta.title}</h1>
            <div className="flex items-center mb-6">
                <div>
                    <p className="text-gray-600 text-sm">Elijah Koulaxis</p>
                    <p className="text-gray-400 text-sm">{pubDate}</p>
                </div>
            </div>
            <article className="text-white prose-lg max-w-none mb-8">{content}</article>

            <div className="flex flex-wrap mb-8">
                <span className="mr-2">Tags:</span>
                <div className="flex flex-wrap">{tags}</div>
            </div>

            <Link passHref href="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Back to Home
            </Link>
        </>
    );
};
