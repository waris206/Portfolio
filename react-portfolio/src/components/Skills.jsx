import { motion } from 'framer-motion';
import { FiShield, FiCode, FiDatabase, FiLock, FiServer, FiTerminal } from 'react-icons/fi';
import { SiPython, SiCplusplus, SiJavascript, SiReact, SiLinux, SiKalilinux, SiWireshark } from 'react-icons/si';

const Skills = ({ darkMode }) => {
  const skillCategories = [
    {
      title: 'Cybersecurity',
      icon: FiShield,
      gradient: 'from-red-600 to-purple-600',
      skills: [
        { name: 'Network Security', level: 95 },
        { name: 'Penetration Testing', level: 90 },
        { name: 'Security Architecture', level: 92 },
        { name: 'Threat Analysis', level: 88 },
      ],
    },
    {
      title: 'Programming',
      icon: FiCode,
      gradient: 'from-blue-600 to-cyan-600',
      skills: [
        { name: 'C/C++', level: 90 },
        { name: 'Python', level: 88 },
        { name: 'JavaScript', level: 85 },
        { name: 'Assembly', level: 82 },
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: FiTerminal,
      gradient: 'from-green-600 to-teal-600',
      skills: [
        { name: 'Kali Linux', level: 92 },
        { name: 'Wireshark', level: 90 },
        { name: 'pfSense', level: 88 },
        { name: 'GNS3', level: 85 },
      ],
    },
    {
      title: 'Networking',
      icon: FiServer,
      gradient: 'from-indigo-600 to-purple-600',
      skills: [
        { name: 'Network Design', level: 93 },
        { name: 'Cisco Technologies', level: 88 },
        { name: 'VPN Configuration', level: 90 },
        { name: 'Firewall Management', level: 91 },
      ],
    },
  ];

  const techStack = [
    { icon: SiPython, name: 'Python', color: 'text-blue-500' },
    { icon: SiCplusplus, name: 'C++', color: 'text-blue-600' },
    { icon: SiJavascript, name: 'JavaScript', color: 'text-yellow-500' },
    { icon: SiReact, name: 'React', color: 'text-cyan-500' },
    { icon: SiLinux, name: 'Linux', color: 'text-yellow-600' },
    { icon: SiKalilinux, name: 'Kali Linux', color: 'text-blue-700' },
    { icon: SiWireshark, name: 'Wireshark', color: 'text-blue-500' },
    { icon: FiShield, name: 'Security', color: 'text-red-600' },
  ];

  const stats = [
    { number: '7+', label: 'Projects', icon: FiCode },
    { number: '4+', label: 'Certifications', icon: FiShield },
    { number: '100%', label: 'Commitment', icon: FiLock },
    { number: '24/7', label: 'Learning', icon: FiDatabase },
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
      id="skills"
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
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            A comprehensive toolkit for cybersecurity and software development
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`p-6 rounded-2xl ${
                darkMode ? 'bg-gray-800' : 'bg-gray-100'
              } shadow-lg text-center`}
            >
              <stat.icon className="text-primary mx-auto mb-3" size={32} />
              <div className={`text-3xl md:text-4xl font-bold mb-2 text-gradient`}>
                {stat.number}
              </div>
              <div className={`text-sm md:text-base ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              variants={itemVariants}
              className={`p-6 rounded-2xl ${
                darkMode ? 'bg-gray-800' : 'bg-gray-100'
              } shadow-xl`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient}`}>
                  <category.icon size={28} className="text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className={`font-medium ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {skill.name}
                      </span>
                      <span className={`font-semibold ${
                        darkMode ? 'text-primary' : 'text-secondary'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`h-2 rounded-full overflow-hidden ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-300'
                    }`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className={`h-full bg-gradient-to-r ${category.gradient}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className={`text-3xl font-bold mb-8 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className={`p-4 rounded-xl ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-100'
                } shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <tech.icon size={48} className={tech.color} />
                <p className={`text-xs mt-2 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
