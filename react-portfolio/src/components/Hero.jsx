import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiChevronDown } from 'react-icons/fi';

const Hero = ({ darkMode }) => {
  const [text, setText] = useState('');
  const fullText = "Hi, I'm Akash";
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setIsTypingComplete(true);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/waris206', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/muhammad-akash-waris-cyber', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:akashwaris.cybersec@gmail.com', label: 'Email' },
];


  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        darkMode ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              darkMode ? 'bg-purple-500/10' : 'bg-purple-300/20'
            }`}
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className={`text-5xl md:text-7xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {text}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-primary"
            >
              |
            </motion.span>
          </h1>
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-4xl font-semibold text-gradient mb-6"
          >
            Cybersecurity Enthusiast & Developer
          </motion.h2>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          Passionate about protecting digital landscapes, low-level programming,
          and creating innovative solutions with cutting-edge technology.
        </motion.p>

        <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-12">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`p-4 rounded-full ${
                darkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-900/10 hover:bg-gray-900/20'
              } transition-all duration-300`}
              aria-label={social.label}
            >
              <social.icon size={28} className={darkMode ? 'text-white' : 'text-gray-900'} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-gray-900 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 border-2 ${
              darkMode ? 'border-white text-white hover:bg-white/10' : 'border-gray-900 text-gray-900 hover:bg-gray-900/10'
            } rounded-full font-semibold text-lg transition-all duration-300`}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <FiChevronDown size={40} className={darkMode ? 'text-white' : 'text-gray-900'} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
