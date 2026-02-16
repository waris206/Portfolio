import { motion } from 'framer-motion';
import { FiHeart, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: FiGithub, 
      href: 'https://github.com/waris206', 
      label: 'GitHub',
      color: 'hover:text-gray-400'
    },
    { 
      icon: FiLinkedin, 
      href: 'https://www.linkedin.com/in/muhammad-akash-waris-cyber', 
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    { 
      icon: FiMail, 
      href: 'mailto:akashwaris.cybersec@gmail.com', 
      label: 'Email',
      color: 'hover:text-red-400'
    },
  ];

  return (
    <footer
      className={`py-12 ${
        darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
      } border-t transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-full ${
                  darkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'
                } ${social.color} transition-all duration-300`}
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>

          <p
            className={`text-lg mb-2 flex items-center justify-center gap-2 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Made with <FiHeart className="text-red-500 animate-pulse" /> by{' '}
            <span className="text-gradient font-semibold">
              Muhammad Akash Waris
            </span>
          </p>

          <p className="text-sm mb-2 text-gray-500">
            Cybersecurity Enthusiast & Developer
          </p>

          <p className="text-sm text-gray-500">
            &copy; {currentYear} Muhammad Akash Waris. All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
