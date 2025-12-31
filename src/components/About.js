import React from 'react';

const About = () => {
  const strengths = [
    "Problem Solving", "Backend Development", "Data Structures", 
    "Algorithms", "Web Development", "REST APIs", "Machine Learning"
  ];

  const languages = ["Python", "Java", "C++", "JavaScript"];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                Dedicated and curious Computer Engineering student with strong DSA background (915+ problems solved across platforms). 
                Passionate about Backend Development, REST APIs, and ML.
              </p>
              <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
                Currently in my second year of Computer Engineering, I'm constantly expanding my knowledge through coursework, 
                personal projects, and online learning. I enjoy tackling complex problems and building efficient, scalable solutions.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Languages Known</h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <span key={lang} className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="animate-on-scroll">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Core Strengths</h3>
              <div className="grid grid-cols-2 gap-3">
                {strengths.map((strength, index) => (
                  <div key={strength} className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{strength}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;