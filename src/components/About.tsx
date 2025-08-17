'use client';

import { motion } from 'framer-motion';
import { FiUser, FiCode, FiServer, FiCloud } from 'react-icons/fi';

const features = [
  {
    icon: <FiCode className="h-6 w-6 text-primary" />,
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces with React, Next.js, and Tailwind CSS.'
  },
  {
    icon: <FiServer className="h-6 w-6 text-primary" />,
    title: 'Backend Development',
    description: 'Creating robust APIs and server-side applications with Node.js, Express, and MongoDB.'
  },
  {
    icon: <FiUser className="h-6 w-6 text-primary" />,
    title: 'AI/ML Integration',
    description: 'Implementing AI-driven features with Hugging Face, PyTorch, and TensorFlow.'
  },
  {
    icon: <FiCloud className="h-6 w-6 text-primary" />,
    title: 'Cloud Deployment',
    description: 'Deploying scalable applications on AWS with EC2, Lambda, and API Gateway.'
  }
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-muted/30 dark:bg-muted/10">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Software Engineer with <span className="gradient-text">2.2 years</span> of experience</h3>
            <p className="text-foreground/80 mb-6">
              I am a passionate Full-Stack Software Engineer specializing in MERN/Next.js, AI/ML integration, and AWS cloud services. With a focus on building high-performance applications, I have developed solutions that combine modern web technologies with artificial intelligence.
            </p>
            <p className="text-foreground/80 mb-6">
              Throughout my career, I have achieved significant milestones including developing sub-300ms inference APIs, creating AI voice assistants, and boosting automation efficiency by 30% through innovative solutions.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {['React', 'Next.js', 'Node.js', 'MongoDB', 'AWS', 'AI/ML', 'PyTorch', 'TensorFlow'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-foreground/70 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}