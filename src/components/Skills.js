import React from 'react';
import { skills, certifications } from '../data/portfolioData.js';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Technical Skills</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Programming Languages */}
            <div className="animate-on-scroll">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Programming Languages</h3>
              <div className="space-y-4">
                {skills.languages.map((skill, index) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks & Tools */}
            <div className="animate-on-scroll">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Frameworks & Tools</h3>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {skills.frameworks.map((framework, index) => (
                  <div key={framework} className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{framework}</span>
                  </div>
                ))}
              </div>

              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Tools & Technologies</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {skills.tools.map((tool, index) => (
                  <span key={tool} className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium">
                    {tool}
                  </span>
                ))}
              </div>

              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Core Concepts</h4>
              <div className="flex flex-wrap gap-2">
                {skills.concepts.map((concept, index) => (
                  <span key={concept} className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm font-medium">
                    {concept}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-16 animate-on-scroll">
            <h3 className="text-xl font-semibold mb-6 text-center text-gray-900 dark:text-white">Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div key={cert} className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg border border-blue-200 dark:border-gray-600">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">{cert}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;