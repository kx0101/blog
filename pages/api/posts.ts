import { NextApiRequest, NextApiResponse } from 'next';
import { getSortedPostsData } from '../../lib/posts';

export default function getAllPosts(_: NextApiRequest, res: NextApiResponse) {
    const posts = getSortedPostsData();

    res.status(200).json({ posts });
}
