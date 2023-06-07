import Image from 'next/image';

export default function ProfilePic() {

    return (
        <section className='w-full mx-auto'>
            <Image
                className='border-4 border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8'
                src="/images/profile-photo-600x600.jpeg"
                width={300}
                height={300}
                alt="Elijah Koulaxis"
                priority={true}
            />
        </section>
    )
}
