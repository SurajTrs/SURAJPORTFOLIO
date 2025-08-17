'use client';

import { motion } from 'framer-motion';
import { 
  FiLayout, 
  FiServer, 
  FiDatabase, 
  FiCode, 
  FiCloud,
  FiCheckCircle
} from 'react-icons/fi';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <FiLayout className="h-6 w-6 text-primary" />,
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Redux', 'HTML/CSS', 'JavaScript/TypeScript']
  },
  {
    title: 'Backend',
    icon: <FiServer className="h-6 w-6 text-primary" />,
    skills: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'WebSockets', 'Authentication/JWT']
  },
  {
    title: 'Databases',
    icon: <FiDatabase className="h-6 w-6 text-primary" />,
    skills: ['MongoDB', 'PostgreSQL', 'Firestore', 'Redis', 'Mongoose', 'SQL']
  },
  {
    title: 'AI/ML',
    icon: <FiCode className="h-6 w-6 text-primary" />,
    skills: ['Hugging Face', 'PyTorch', 'TensorFlow', 'Rasa', 'Transformers', 'STT/TTS']
  },
  {
    title: 'Cloud/DevOps',
    icon: <FiCloud className="h-6 w-6 text-primary" />,
    skills: ['AWS (EC2, Lambda, API Gateway, S3)', 'Docker', 'CI/CD', 'Vercel', 'Netlify', 'Git']
  },
  {
    title: 'Testing',
    icon: <FiCheckCircle className="h-6 w-6 text-primary" />,
    skills: ['Jest', 'Playwright', 'Postman', 'Cypress', 'Unit Testing', 'Integration Testing']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-blue-to-br from-muted/10 via-white to-muted/20 dark:from-blue-950/60 dark:via-blue-900/40 dark:to-blue-950/20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold mb-6 tracking-tight text-primary drop-shadow-lg">Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="mr-3">{category.icon}</div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * skillIndex }}
                    className="flex items-center text-foreground/80"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}