import React from 'react';
import { FiTrendingUp, FiAward, FiTarget, FiCalendar } from 'react-icons/fi';
import { cpStats } from '../data/portfolioData.js';

const CPStats = () => {
  const StatCard = ({ icon: Icon, title, value, subtitle, color }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
          {subtitle && <div className="text-sm text-gray-600 dark:text-gray-400">{subtitle}</div>}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
    </div>
  );

  const PlatformCard = ({ platform, data, color }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <h4 className={`text-lg font-semibold mb-4 ${color}`}>{platform}</h4>
      <div className="space-y-2">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
            <span className="font-medium text-gray-900 dark:text-white">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="cp-stats" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Competitive Programming & Problem Solving</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Showcasing my coding journey and achievements</p>
        </div>

        {/* Overall Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard
            icon={FiTarget}
            title="Total Problems"
            value={`${cpStats.totalProblems}+`}
            color="bg-blue-500"
          />
          <StatCard
            icon={FiCalendar}
            title="Active Days"
            value={cpStats.activeDays}
            color="bg-green-500"
          />
          <StatCard
            icon={FiTrendingUp}
            title="Max Streak"
            value={cpStats.maxStreak}
            subtitle="days"
            color="bg-purple-500"
          />
          <StatCard
            icon={FiAward}
            title="Total Contests"
            value={cpStats.totalContests}
            color="bg-orange-500"
          />
        </div>

        {/* Platform Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <PlatformCard
            platform="LeetCode"
            data={cpStats.platforms.leetcode}
            color="text-orange-500"
          />
          <PlatformCard
            platform="CodeChef"
            data={cpStats.platforms.codechef}
            color="text-brown-500"
          />
          <PlatformCard
            platform="CodeForces"
            data={cpStats.platforms.codeforces}
            color="text-blue-500"
          />
        </div>

        {/* Codolio Profile */}
        <div className="text-center mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Codolio Profile</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Check out my complete coding profile and statistics</p>
            <a
              href={cpStats.codolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              <FiTrendingUp className="mr-2" />
              View Codolio Profile
            </a>
          </div>
        </div>

        {/* Badges & Achievements */}
        <div className="animate-on-scroll">
          <h3 className="text-xl font-semibold mb-6 text-center text-gray-900 dark:text-white">Awards & Badges</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {cpStats.badges.map((badge, index) => (
              <div key={badge} className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-lg border border-yellow-200 dark:border-gray-600 text-center">
                <div className="w-8 h-8 bg-yellow-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <FiAward className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CPStats;