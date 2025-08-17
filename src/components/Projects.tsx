'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Card3D from './Card3D';
import ProjectTitle from './ProjectTitle';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';

const projects = [
  {
    title: 'AI Voice Assistant (Tripy)',
    description: 'GPT-based voice assistant with Google STT & Tacotron TTS for multi-turn conversations. Achieved sub-300ms latency with AWS EC2/Lambda.',
    image: '/projects/ai-assistant.jpg',
    technologies: ['Python', 'Node.js', 'Transformers', 'PyTorch', 'AWS'],
    github: 'https://github.com/SurajTrs/Tripy',
    demo: 'https://tripyassistant.vercel.app'
  },
  {
    title: 'Student Sharpner Edtech Platform',
    description: 'Scalable Edtech platform with live classes, AI-driven search, and role-based access. JWT-based authentication, deployed on Vercel.',
    image: '/projects/edtech.jpg',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind', 'Vercel'],
    github: 'https://github.com/SurajTrs/STUDENT_SHARPNER',
    demo: 'https://student-sharpner-bi8a.vercel.app'
  },
  {
    title: 'Amazon Clone E-Commerce',
    description: 'Responsive e-commerce with real-time Firestore updates, authentication, and checkout flows. Optimized UI with React hooks → 15% faster load times.',
    image: '/projects/ecommerce.jpg',
    technologies: ['React', 'Firebase Auth', 'Firestore', 'FakeStore API'],
    github: 'https://github.com/SurajTrs/Amazon',
    demo: 'https://amazon-shopping-voxs.vercel.app/home'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-muted/30 dark:bg-muted/10 relative overflow-hidden">
      {/* 3D animated background elements */}
      <div className="absolute inset-0 -z-5">
        <Canvas>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          
          {/* Floating spheres */}
          {[...Array(10)].map((_, i) => {
            const posX = (Math.random() - 0.5) * 10;
            const posY = (Math.random() - 0.5) * 10;
            const posZ = (Math.random() - 0.5) * 5 - 5;
            const size = Math.random() * 0.5 + 0.1;
            
            return (
              <Float key={i} speed={Math.random() + 0.2} rotationIntensity={0.2} floatIntensity={0.5}>
                <mesh position={[posX, posY, posZ]}>
                  <sphereGeometry args={[size, 16, 16]} />
                  <meshStandardMaterial 
                    color={i % 2 === 0 ? "#4f46e5" : "#8b5cf6"} 
                    transparent
                    opacity={0.7}
                    metalness={0.5}
                    roughness={0.2}
                  />
                </mesh>
              </Float>
            );
          })}
        </Canvas>
      </div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <ProjectTitle title="Key Projects" color="#6366f1" floatIntensity={0.3} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
              whileHover={{ rotateX: 6, rotateY: 8, scale: 1.04 }}
              style={{ perspective: 1000 }}
            >
              <Card3D 
                className="overflow-hidden h-full glass shadow-xl border border-primary/20 hover:shadow-2xl transition-shadow duration-300" 
                title={project.title}
                glowColor={index % 2 === 0 ? "#4f46e5" : "#8b5cf6"}
                rotationIntensity={0.18}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 z-10 mix-blend-overlay group-hover:opacity-70 transition-opacity" />
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1, rotate: 1 }}
                    transition={{ duration: 0.4 }}
                    className="relative h-full w-full"
                  >
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute top-2 right-2 z-20">
                    <span className="px-3 py-1 glass text-xs font-medium rounded-full">
                      {project.technologies[0]}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-extrabold mb-2 group-hover:text-primary transition-colors tracking-tight drop-shadow-lg">{project.title}</h3>
                  <p className="text-foreground/80 mb-4 text-base leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(1).map((tech) => (
                      <motion.span 
                        key={tech} 
                        className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(var(--primary-rgb), 0.2)' }}
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
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}