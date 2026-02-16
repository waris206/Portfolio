import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`py-8 ${
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
          <p className={`text-lg mb-2 flex items-center justify-center gap-2 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Made with <FiHeart className="text-red-500 animate-pulse" /> by{' '}
            <span className="text-gradient font-semibold">Akash</span>
          </p>
          <p className={`text-sm ${
            darkMode ? 'text-gray-500' : 'text-gray-500'
          }`}>
            &copy; {currentYear} All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
