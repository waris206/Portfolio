import { motion } from 'framer-motion';
import { FiAward, FiCheckCircle } from 'react-icons/fi';

const Certificates = ({ darkMode }) => {
  const certificates = [
    {
      title: 'Google Cyber Security',
      issuer: 'Google',
      icon: '🛡️',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Foundations of Cybersecurity',
      issuer: 'Google',
      icon: '🔐',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Play it Safe (Manage Security Risks)',
      issuer: 'Google',
      icon: '⚡',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Connect and Protect (Networks and Network Security)',
      issuer: 'Google',
      icon: '🌐',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Assets, Threats, and Vulnerabilities',
      issuer: 'Google',
      icon: '🎯',
      color: 'from-red-500 to-pink-500',
    },
    {
      title: 'Sound the Alarm (Detection and Response)',
      issuer: 'Google',
      icon: '🚨',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Password Cracking Certificate',
      issuer: 'Security Training',
      icon: '🔑',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      title: 'Python Crash Course',
      issuer: 'Programming',
      icon: '🐍',
      color: 'from-blue-600 to-blue-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="certificates"
      className={`min-h-screen py-20 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      } transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">
            Certificates & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Professional certifications and courses completed in cybersecurity and development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className={`relative p-6 rounded-2xl ${
                darkMode ? 'bg-gray-800' : 'bg-gray-50'
              } border ${
                darkMode ? 'border-gray-700' : 'border-gray-200'
              } shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}
            >
              {/* Background Gradient */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.color} opacity-10 rounded-full transform translate-x-8 -translate-y-8`}></div>
              
              {/* Icon */}
              <div className="relative z-10 mb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center text-3xl shadow-lg mb-4`}>
                  {cert.icon}
                </div>
                <FiCheckCircle className="text-green-500 absolute top-0 right-0" size={24} />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className={`text-lg font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                } line-clamp-2`}>
                  {cert.title}
                </h3>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {cert.issuer}
                </p>
              </div>

              {/* Decorative Badge */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
