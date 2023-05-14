import getFormattedDate from '@/lib/getFormattedDate';
import Link from 'next/link';

export default function ListItem({ post }: { post: any }) {
    const { id, title, date, tags } = post;
    const formattedDate = getFormattedDate(date);

    return (
        <li className="py-4">
            <Link href={`/posts/${id}`}>
                <a className="text-3xl font-bold text-white/70 hover:text-white">
                    {title}
                </a>
            </Link>
            <p className="mt-2 text-gray-400">{formattedDate}</p>
            <div className="flex flex-wrap gap-4 mt-4">
                {tags.map((tag: string, i: number) => (
                    <Link key={i} href={`/tags/${tag}`}>
                        <a className="px-4 py-2 bg-gray-800 rounded-full text-white/90 hover:bg-gray-700">
                            {tag}
                        </a>
                    </Link>
                ))}
            </div>
            <hr className="my-8 border-gray-600" />
        </li>
    );
}
