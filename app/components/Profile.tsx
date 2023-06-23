import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ProfilePic from './ProfilePic';

const Profile = () => {
    return (
        <div className="sm:w-1/2 sm:mr-16">
            <ProfilePic />
            <div className="flex justify-center space-x-4 mt-8">
                <a
                    target="_blank"
                    href="https://github.com/kx0101"
                    className="text-4xl text-white hover:text-blue-400"
                >
                    <FaGithub />
                </a>
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/elijah-koulaxiskx/"
                    className="text-4xl text-white hover:text-blue-400"
                >
                    <FaLinkedin />
                </a>
            </div>
        </div>
    );
};

export default Profile;
