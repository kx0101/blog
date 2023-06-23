'use client';

import React, { useState } from 'react';
import useContactForm from './hooks/useContactForm';
import sendEmail from './utils/send-email';
import { Spinner } from '../components/Spinner';
import { motion } from 'framer-motion';

const Contact = () => {
    const { values, setValues, handleChange } = useContactForm();

    const [responseMessage, setResponseMessage] = useState({
        isSuccessful: false,
        message: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {

            setResponseMessage({
                isSuccessful: false,
                message: '',
            });

            setIsLoading(true);
            const req = await sendEmail(values.email, values.subject, values.message);

            if (req.status === 200) {
                setResponseMessage({
                    isSuccessful: true,
                    message: 'Thank you for your message.',
                });
            }
        } catch (e) {
            setResponseMessage({
                isSuccessful: false,
                message: 'Oops something went wrong. Please try again.',
            });
        } finally {
            setIsLoading(false);
            setValues({
                email: '',
                subject: '',
                message: '',
            })
        }
    };

    return (
        <motion.div
            className="max-w-md mx-auto mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-1 font-semibold">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        required
                        id="email"
                        value={values.email}
                        onChange={handleChange}
                        type="email"
                        className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="subject" className="block mb-1 font-semibold">
                        Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                        required
                        id="subject"
                        value={values.subject}
                        onChange={handleChange}
                        type="text"
                        className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block mb-1 font-semibold">
                        Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        required
                        value={values.message}
                        onChange={handleChange}
                        id="message"
                        rows={8}
                        className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {isLoading ?
                    <Spinner />
                    :
                    <motion.button
                        type="submit"
                        value="Submit"
                        className="w-full py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        Send
                    </motion.button>
                }

            </form>

            {responseMessage.message && (
                <motion.div
                    className={`mt-4 p-4 rounded ${responseMessage.isSuccessful
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                        }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {responseMessage.message}
                </motion.div>
            )}
        </motion.div>
    );
};

export default Contact;
