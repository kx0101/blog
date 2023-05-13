import Posts from "./components/Posts"
import ProfilePic from "./components/ProfilePic"

export default function Home() {
    return (
        <main className="mx-auto">
            <ProfilePic />
            <p className="mt-12 mb-12 text-3xl text-center text-white">
                Hello and Welcome 👋&nbsp;
                <span className="whitespace-nowrap">
                    I&apos;m <span className="font-bold">Elijah</span>.
                </span>
            </p>

            <Posts />
        </main>
    )
}
