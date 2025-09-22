'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'AI Voice Assistant (Tripy)',
    description: 'GPT-based voice assistant with Google STT & Tacotron TTS for multi-turn conversations. Achieved sub-300ms latency with AWS EC2/Lambda.',
    image: '/projects/ai-assistant.jpg',
    technologies: ['Python', 'Node.js', 'Transformers', 'PyTorch', 'AWS'],
    github: 'https://github.com/SurajTrs/Tripy',
    demo: 'https://tripyassistant.vercel.app',
    featured: true
  },
  {
    title: 'Student Sharpner Edtech Platform',
    description: 'Scalable Edtech platform with live classes, AI-driven search, and role-based access. JWT-based authentication, deployed on Vercel.',
    image: '/projects/edtech.jpg',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind', 'Vercel'],
    github: 'https://github.com/SurajTrs/STUDENT_SHARPNER',
    demo: 'https://student-sharpner-bi8a.vercel.app',
    featured: true
  },
  {
    title: 'Amazon Clone E-Commerce',
    description: 'Responsive e-commerce with real-time Firestore updates, authentication, and checkout flows. Optimized UI with React hooks → 15% faster load times.',
    image: '/projects/ecommerce.jpg',
    technologies: ['React', 'Firebase Auth', 'Firestore', 'FakeStore API'],
    github: 'https://github.com/SurajTrs/Amazon',
    demo: 'https://amazon-shopping-voxs.vercel.app/home',
    featured: true
  },
  {
    title: 'Portfolio Website',
    description: 'Modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a responsive design and dark/light mode.',
    image: '/projects/portfolio.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/SurajTrs/portfolio',
    demo: '#',
    featured: false
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2 inline-block">My Work</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter(project => project.featured).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, i) => (
                      <motion.span 
                        key={i}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-base font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white shadow-md hover:from-secondary hover:to-primary transition-all"
                      whileHover={{ scale: 1.08, x: 2 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <FiGithub className="animate-pulse-slow" /> GitHub
                    </motion.a>
                    <motion.a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                      whileHover={{ scale: 1.05, x: 2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink className="animate-pulse-slow" /> Live Demo
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}