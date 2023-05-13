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

    if (!posts.find(post => post.id === postId)) {
        return notFound();
    }

    const { meta, content } = await getPostData(postId);

    const pubDate = getFormattedDate(meta.date);

    const tags = meta.tags.map((tag: any, i: number) => (
        <Link key={i} href={`/tags/${tag}`}>tag</Link>
    ))

    return (
        <>
            <h2 className="text-3xl mt-4 mb-0">{meta.title}</h2>
            <p className="mt-0 text-sm">
                {pubDate}
            </p>
            <article>
                {content}
            </article>

            <section>
                <h3>Related:</h3>
                <div className="flex flex-row gap-4">
                    {tags}
                </div>
            </section>
            <p className="mb-10">
                <Link href="/">Back to home</Link>
            </p>
        </>
    )
}
