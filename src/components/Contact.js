import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiExternalLink } from 'react-icons/fi';
import { personalInfo, socialLinks } from '../data/portfolioData.js';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-on-scroll">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <FiMail className="w-5 h-5 text-blue-500 mr-4" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                    <a href={`mailto:${personalInfo.email}`} className="text-gray-900 dark:text-white hover:text-blue-500">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <FiPhone className="w-5 h-5 text-blue-500 mr-4" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                    <a href={`tel:${personalInfo.phone}`} className="text-gray-900 dark:text-white hover:text-blue-500">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <FiMapPin className="w-5 h-5 text-blue-500 mr-4" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                    <p className="text-gray-900 dark:text-white">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="animate-on-scroll">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors group"
                >
                  <FiLinkedin className="w-6 h-6 text-blue-600 mr-3 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">LinkedIn</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Professional</p>
                  </div>
                </a>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                >
                  <FiGithub className="w-6 h-6 text-gray-700 dark:text-gray-300 mr-3 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">GitHub</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Code</p>
                  </div>
                </a>
                <a
                  href={socialLinks.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors group"
                >
                  <FiExternalLink className="w-6 h-6 text-purple-600 mr-3 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Behance</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Design</p>
                  </div>
                </a>
                <a
                  href={socialLinks.codolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors group"
                >
                  <FiExternalLink className="w-6 h-6 text-green-600 mr-3 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Codolio</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Coding</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 animate-on-scroll">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together</h3>
              <p className="mb-6 opacity-90">
                Whether you have a project in mind or just want to connect, I'd love to hear from you.
              </p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                <FiMail className="mr-2" />
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;