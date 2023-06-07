import Posts from "./components/Posts"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ProfilePic from "./components/ProfilePic"

export default function Home() {
    return (
        <main className="mx-auto">
            <div className="mt-12 flex flex-col sm:flex-row items-center">
                <div className="sm:w-1/2">
                    <ProfilePic />
                    <div className="flex justify-center space-x-4 mt-4">
                        <a target="_blank" href="https://github.com/kx0101" className="text-4xl text-white hover:text-blue-400">
                            <FaGithub />
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/elijah-koulaxiskx/" className="text-4xl text-white hover:text-blue-400">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
                <div className="sm:w-1/2 mt-8 sm:mt-0">
                    <h1 className="text-3xl mt-8 font-bold text-white text-left align-left">
                        <span className="block">👋 I&apos;m Elijah!</span>
                    </h1>
                    <p className="text-lg mt-8 text-white text-left align-left">
                        I&apos;m currently a fourth-year Computer Science student at the University of Thessaly, and I work as a Junior Software Engineer at <a target="_blank" className="text-blue-400 underline" href="https://www.netcompany-intrasoft.com/">Netcompany-Intrasoft</a>.
                    </p>

                    <p className="text-lg mt-4 text-white text-left align-left">
                        I thrive on taking on technical challenges and building software for diverse platforms. With a deep curiosity for understanding the inner workings of technology, I constantly explore the intricacies of software development. I&apos;m especially passionate about optimizing performance and conducting benchmarking to push the boundaries of what&apos;s possible.
                    </p>
                </div>
            </div>

            <section className="mt-12 mx-auto max-w-2xl">
                <div className="text-center">
                    <h2 className="text-5xl font-bold mt-24 mb-4 text-white">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                            Blog
                        </span>
                    </h2>
                    <hr className="mb-16" />
                </div>
                <ul className="space-y-8">
                    <Posts />
                </ul>
            </section>
        </main>
    );
}
