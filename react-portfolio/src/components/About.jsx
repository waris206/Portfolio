import { motion } from 'framer-motion';
import { FiCode, FiShield, FiCpu, FiLock } from 'react-icons/fi';

const About = ({ darkMode }) => {
  const skills = [
    {
      icon: FiShield,
      title: 'Cybersecurity',
      description: 'Advanced techniques in payload creation, steganography, and security analysis',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: FiCpu,
      title: 'Low-Level Programming',
      description: 'Assembly language expertise for efficient systems and innovative solutions',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FiCode,
      title: 'Data Structures & Algorithms',
      description: 'Custom implementations of heaps, expression trees, and graph algorithms',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FiLock,
      title: 'Cryptography',
      description: 'Encryption techniques, secure communications, and cryptographic protocols',
      color: 'from-purple-500 to-indigo-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="about"
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
            About Me
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8`}></div>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            A cybersecurity enthusiast with a passion for protecting digital landscapes
            and solving complex challenges through technology and innovation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className={`p-8 rounded-2xl ${
                darkMode ? 'bg-gray-800/50' : 'bg-gray-50'
              } backdrop-blur-sm border ${
                darkMode ? 'border-gray-700' : 'border-gray-200'
              } shadow-xl hover:shadow-2xl transition-all duration-300`}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${skill.color} shadow-lg`}>
                  <skill.icon size={32} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {skill.title}
                  </h3>
                  <p className={`${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {skill.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`p-8 md:p-12 rounded-2xl ${
            darkMode ? 'bg-gray-800/50' : 'bg-gray-50'
          } backdrop-blur-sm border ${
            darkMode ? 'border-gray-700' : 'border-gray-200'
          } shadow-xl`}
        >
          <h3 className="text-3xl font-bold mb-6 text-gradient">
            My Journey
          </h3>
          <div className={`space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <p className="text-lg leading-relaxed">
              My journey in technology is driven by curiosity and a dedication to making
              a meaningful impact. I specialize in cybersecurity, exploring advanced
              techniques including payload creation, steganography, and cryptographic protocols.
            </p>
            <p className="text-lg leading-relaxed">
              With expertise in low-level programming using assembly language, I build
              efficient systems and develop innovative solutions. My passion extends to
              data structures and algorithms, where I create custom implementations for
              complex problems.
            </p>
            <p className="text-lg leading-relaxed">
              I'm deeply interested in cryptography and steganography, constantly exploring
              new ways to enhance security and create robust, secure systems. My goal is to
              contribute to a safer digital world through technology and innovation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
