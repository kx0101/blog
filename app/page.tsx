import Posts from "./components/Posts"
import ProfilePic from "./components/ProfilePic"

export default function Home() {
    return (
        <main className="mx-auto">
            <div className="mt-8 flex flex-col items-center">
                <ProfilePic />
                <h1 className="mt-4 text-4xl font-bold text-white/90 text-center">
                    Hello and Welcome 👋&nbsp;
                    <span className="whitespace-nowrap">
                        I&apos;m <span className="font-bold">Elijah</span>.
                    </span>
                </h1>
            </div>

            <section className="mt-12 mx-auto max-w-2xl">
                <h2 className="text-4xl font-bold mb-8 text-white/90">Blog</h2>
                <ul className="space-y-8">
                    <Posts />
                </ul>
            </section>
        </main>
    );
}
