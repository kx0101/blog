import Posts from "./components/Posts"
import ProfilePic from "./components/ProfilePic"

export default function Home() {
    return (
        <main className="mx-auto">
            <div className="mt-12 flex flex-col items-center">
                <ProfilePic />
                <h1 className="mt-8 text-5xl font-bold text-white text-center flex flex-col items-center">
                    <span className="mb-4">Hello and Welcome 👋&nbsp;</span>
                    <span className="block">
                        <span className="text-gray-400">I&apos;m</span>{" "}
                        <span className="text-blue-400 font-bold">Elijah</span>
                    </span>
                </h1>
            </div>

            <section className="mt-12 mx-auto max-w-2xl">
                <h2 className="text-4xl font-bold mb-8 text-white">Blog</h2>
                <ul className="space-y-8">
                    <Posts />
                </ul>
            </section>
        </main>
    );
}
