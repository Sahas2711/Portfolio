import React from 'react';
import { FiDownload, FiMail } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData.js';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-on-scroll">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
              <span className="block">Hi, I'm</span>
              <span className="text-blue-600 dark:text-blue-400">{personalInfo.name}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              {personalInfo.title}
            </p>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
              {personalInfo.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 text-white dark:bg-blue-500 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 font-medium flex items-center"
              >
                <FiDownload className="mr-2" />
                View Resume
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-white text-blue-600 dark:bg-gray-800 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded-2xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 font-medium flex items-center"
              >
                <FiMail className="mr-2" />
                Contact Me
              </a>
            </div>
          </div>

          <div className="md:w-2/5 animate-on-scroll">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1 shadow-xl">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg">
                <div className="w-8 h-8 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;