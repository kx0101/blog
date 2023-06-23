import { Analytics } from '@vercel/analytics/react';
import HomePage from './components/HomePage';

const Page = () => {

    return (
        <>
            <HomePage />
            <Analytics />
        </>
    );
};

export default Page;
