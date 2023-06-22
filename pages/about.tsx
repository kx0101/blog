import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
    return (
        <div>
            <section className="py-10">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg"
                >
                    Hi, I'm Elijah Koulaxis! 👋 I'm a software engineer with a passion for creating innovative solutions and exploring new technologies. I enjoy working on challenging projects and collaborating with talented teams to deliver high-quality software products.
                </motion.p>
            </section>

            <section className="py-10">
                <h2 className="text-3xl font-bold mb-4">Hobbies and Interests</h2>
                <div className="grid grid-cols-2 gap-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center"
                    >
                        <span role="img" aria-label="Guitar" className="text-2xl mr-2">
                            🎸
                        </span>
                        <p className="text-lg">Playing the guitar</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex items-center"
                    >
                        <span role="img" aria-label="Travel" className="text-2xl mr-2">
                            ✈️
                        </span>
                        <p className="text-lg">Traveling and exploring new places</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex items-center"
                    >
                        <span role="img" aria-label="Books" className="text-2xl mr-2">
                            📚
                        </span>
                        <p className="text-lg">Reading books</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex items-center"
                    >
                        <span role="img" aria-label="Cooking" className="text-2xl mr-2">
                            👨‍🍳
                        </span>
                        <p className="text-lg">Cooking and trying new recipes</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-10">
                <h2 className="text-3xl font-bold mb-4">Professional Milestones</h2>
                <ul className="list-disc pl-6">
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-lg"
                    >
                        Completed Bachelor's degree in Computer Science
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg"
                    >
                        Worked as a software engineer at XYZ Company for 3 years
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-lg"
                    >
                        Led a team of developers in a successful project delivery
                    </motion.li>
                </ul>
            </section>

            <a href="/">Go back</a>
        </div>
    );
};

export default AboutPage;
