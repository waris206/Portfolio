import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useState } from 'react';

const Projects = ({ darkMode }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: 'Digital Cafe System',
      description: 'A modernized system for managing cafes efficiently with real-time order tracking and inventory management.',
      longDescription: 'Complete cafe management solution with features for order processing, inventory tracking, customer management, and analytics dashboard.',
      tech: ['Python', 'Database', 'GUI'],
      github: 'https://github.com/waris206/digital-cafe-system',
      gradient: 'from-orange-500 to-red-500',
      icon: '☕️',
    },
    {
      title: 'Pac-Man Game (8086 Assembly)',
      description: 'A fully functional Pac-Man game built entirely in Assembly language.',
      longDescription: 'Classic arcade game recreated using 8086 Assembly with smooth animations, ghost AI, score tracking, and sound effects.',
      tech: ['Assembly', '8086', 'Game Dev'],
      github: 'https://github.com/waris206/Pacman-',
      gradient: 'from-yellow-500 to-amber-500',
      icon: '🎮',
    },
    {
      title: 'SkyNav AI',
      description: 'An intelligent navigation system for advanced routing and pathfinding.',
      longDescription: 'AI-powered navigation system using advanced graph algorithms for optimal route planning with real-time traffic analysis.',
      tech: ['AI/ML', 'Algorithms', 'Python'],
      github: 'https://github.com/waris206/SkyNav_ai',
      gradient: 'from-blue-500 to-cyan-500',
      icon: '🛫',
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

  const cardVariants = {
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
      id="projects"
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
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Explore some of my recent work showcasing innovation and technical expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className={`relative rounded-2xl overflow-hidden ${
                darkMode ? 'bg-gray-900' : 'bg-white'
              } shadow-xl hover:shadow-2xl transition-all duration-300`}
            >
              {/* Card Header with Gradient */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.2 : 1,
                    rotate: hoveredIndex === index ? 5 : 0,
                  }}
                  className="text-7xl"
                >
                  {project.icon}
                </motion.div>
                
                {/* Animated Background Circles */}
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.5 : 1,
                    opacity: hoveredIndex === index ? 0.3 : 0.1,
                  }}
                  className="absolute inset-0 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className={`text-2xl font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`mb-4 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {hoveredIndex === index ? project.longDescription : project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-sm rounded-full ${
                        darkMode
                          ? 'bg-gray-800 text-primary'
                          : 'bg-gray-100 text-secondary'
                      } font-semibold`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                      darkMode
                        ? 'bg-gray-800 hover:bg-gray-700 text-white'
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    } transition-colors duration-300`}
                  >
                    <FiGithub size={18} />
                    <span>Code</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 ${
                      darkMode
                        ? 'border-primary text-primary hover:bg-primary hover:text-gray-900'
                        : 'border-secondary text-secondary hover:bg-secondary hover:text-white'
                    } transition-colors duration-300`}
                  >
                    <FiExternalLink size={18} />
                    <span>View</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
