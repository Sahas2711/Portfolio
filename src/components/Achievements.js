import React from 'react';
import { FiAward, FiTrendingUp, FiUsers } from 'react-icons/fi';
import { achievements } from '../data/portfolioData.js';

const Achievements = () => {
  const getIcon = (title) => {
    if (title.includes('Scholarship')) return FiAward;
    if (title.includes('Hackathon')) return FiUsers;
    if (title.includes('Challenge')) return FiTrendingUp;
    return FiAward;
  };

  const getColor = (index) => {
    const colors = [
      'from-blue-500 to-purple-600',
      'from-green-500 to-blue-600',
      'from-purple-500 to-pink-600'
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Achievements & Activities</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Recognition and milestones in my journey</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = getIcon(achievement.title);
              const colorClass = getColor(index);
              
              return (
                <div key={achievement.title} className="group animate-on-scroll">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                    <div className={`w-12 h-12 bg-gradient-to-r ${colorClass} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-sm font-medium">
                        {achievement.year}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Highlights */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 border border-blue-200 dark:border-gray-600">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Key Highlights</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">915+</div>
                  <div className="text-gray-600 dark:text-gray-400">Problems Solved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">8.16</div>
                  <div className="text-gray-600 dark:text-gray-400">CGPA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">31</div>
                  <div className="text-gray-600 dark:text-gray-400">Contests Participated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;