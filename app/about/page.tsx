'use client';

import React from "react";
import { motion } from "framer-motion";
import { aboutData } from "./data";

export default function AboutPage() {
    return (
        <div>
            <section className="py-10">
                <h2 className="text-3xl font-bold">{aboutData.aboutMe.title}</h2>
                <hr className="mt-4" />
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg mt-8"
                >
                    {aboutData.aboutMe.description}
                </motion.p>
                <section>
                    <motion.blockquote
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="quote-text mt-16"
                    >
                        {aboutData.favoriteQuote}
                    </motion.blockquote>
                </section>
            </section>


            <section className="py-10">
                <h2 className="text-3xl font-bold">{aboutData.hobbiesInterests.title}</h2>
                <hr className="mt-4" />
                <div className="grid grid-cols-2 gap-4 mt-8">
                    {aboutData.hobbiesInterests.items.map((hobby, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="flex items-center"
                        >
                            <span role="img" aria-label={hobby.emoji} className="text-2xl mr-2">
                                {hobby.emoji}
                            </span>
                            <p className="text-lg">{hobby.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="py-10">
                <h2 className="text-3xl font-bold">{aboutData.achievements.title}</h2>
                <hr className="mt-4" />
                {aboutData.achievements.items.map((company, index) => (
                    <div key={index}>
                        <h3 className="text-xl font-bold mb-2 mt-8">{company.company}</h3>
                        <ul className="list-disc pl-6">
                            {company.milestones.map((milestone, milestoneIndex) => (
                                <motion.li
                                    key={milestoneIndex}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: milestoneIndex * 0.2 }}
                                    className="text-xl m-8"
                                >
                                    <strong>{milestone.year}</strong> - {milestone.emoji} {milestone.milestone}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
        </div>
    );
};
