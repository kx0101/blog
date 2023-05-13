import { Meta } from '@/types';
import getFormattedDate from '@/lib/getFormattedDate';
import Link from 'next/link';

type Props = {
    post: Meta;
};

export default function ListItem({ post }: Props) {
    const { id, title, date } = post;
    const formattedDate = getFormattedDate(date);

    return (
        <li className='mt-4 text-2xl text-white/90'>
            <Link className='text-white/70 hover:text-white' href={`/posts/${id}`}>
                {title}
            </Link>
            <br />
            <p className='text-sm mt-1'>{formattedDate}</p>
            <hr className='my-2 border-gray-400 border-solid' />
        </li>
    )
}
