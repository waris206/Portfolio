import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiInstagram, FiSend } from 'react-icons/fi';
import { useState } from 'react';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const socialLinks = [
    {
      icon: FiGithub,
      label: 'GitHub',
      href: 'https://github.com/waris206',
      color: 'hover:text-gray-700 dark:hover:text-gray-300',
      gradient: 'from-gray-700 to-gray-900',
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/muhammad-akash-waris-cyber',
      color: 'hover:text-blue-600',
      gradient: 'from-blue-600 to-blue-800',
    },
    {
      icon: FiMail,
      label: 'Email',
      href: 'mailto:akashwaris.cybersec@gmail.com',
      color: 'hover:text-red-600',
      gradient: 'from-red-600 to-red-800',
    },
    {
      icon: FiInstagram,
      label: 'Instagram',
      href: '#',
      color: 'hover:text-pink-600',
      gradient: 'from-pink-600 to-purple-600',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className={`min-h-screen py-20 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-100'
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
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`p-8 rounded-2xl ${
              darkMode ? 'bg-gray-900' : 'bg-white'
            } shadow-xl`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode
                      ? 'bg-gray-800 border-gray-700 text-white focus:border-primary'
                      : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-secondary'
                  } focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300`}
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode
                      ? 'bg-gray-800 border-gray-700 text-white focus:border-primary'
                      : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-secondary'
                  } focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300`}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode
                      ? 'bg-gray-800 border-gray-700 text-white focus:border-primary'
                      : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-secondary'
                  } focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 resize-none`}
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-gray-900 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <FiSend size={20} />
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className={`text-3xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Connect With Me
            </h3>
            <p className={`text-lg mb-8 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Feel free to reach out through any of these platforms. I'm always open to
              discussing new projects, creative ideas, or opportunities.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`p-6 rounded-2xl ${
                    darkMode ? 'bg-gray-900' : 'bg-white'
                  } shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-3`}
                >
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${social.gradient}`}>
                    <social.icon size={32} className="text-white" />
                  </div>
                  <span className={`font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className={`mt-8 p-6 rounded-2xl ${
                darkMode ? 'bg-gray-900' : 'bg-white'
              } shadow-lg`}
            >
              <h4 className={`text-xl font-bold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Quick Info
              </h4>
              <div className={`space-y-2 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <p>📍 Location: Available Worldwide</p>
                <p>⏰ Response Time: Within 24 hours</p>
                <p>💼 Open for opportunities</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
