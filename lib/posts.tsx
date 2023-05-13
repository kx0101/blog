import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost, Meta } from '@/types';
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight/lib';
import rehypeSlug from 'rehype-slug';

const postsDirectory = path.join(process.cwd(), 'blogposts');

export function generateStaticParams() {
    const posts = getSortedPostsData();

    return posts.map(post => ({
        postId: post.id
    }));
}

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.mdx$/, '');

        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf-8');

        const matterResult = matter(fileContents);

        const blogPost: Meta = {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date,
            tags: matterResult.data.tags,
        }

        return blogPost;
    });

    return allPostsData.sort((a, b) => a.date < b.date ? 1 : -1);
}

export async function getPostData(id: string) {
    const fullPath = path.join(postsDirectory, `${id}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    const { frontmatter, content } = await compileMDX<{ title: string, date: string, tags: string[] }>({
        source: fileContents,
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                rehypePlugins: [
                    rehypeHighlight,
                    rehypeSlug,
                    [rehypeAutolinkHeadings, {
                        behavior: 'wrap'
                    }]
                ]
            }
        }
    })

    const blogPostWithHTML: BlogPost = {
        meta: {
            id,
            title: frontmatter.title,
            date: frontmatter.date,
            tags: frontmatter.tags,
        },
        content
    }

    return blogPostWithHTML;
}
