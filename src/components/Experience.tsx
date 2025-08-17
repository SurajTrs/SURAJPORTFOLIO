'use client';

import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

const experiences = [
  {
    company: 'Capyngen Pvt. Ltd.',
    position: 'Software Engineer (AI/ML)',
    period: 'May 2024 – Present',
    description: 'Developing AI voice bots and low-latency APIs using AWS, GPT, and LLaMA models. Implemented voice recognition systems with sub-300ms response times.',
    technologies: ['AWS', 'GPT', 'LLaMA', 'Python', 'Node.js']
  },
  {
    company: 'Codbee.in',
    position: 'Full-Stack Developer',
    period: 'Jan 2024 – Mar 2024',
    description: 'Created a voice-enabled learning assistant using Hugging Face and DeepSpeech technologies. Improved user engagement by 25% through intuitive voice commands.',
    technologies: ['React', 'Node.js', 'Hugging Face', 'DeepSpeech', 'MongoDB']
  },
  {
    company: 'Advance Career Guide',
    position: 'Backend Developer',
    period: 'Sep 2023 – Jan 2024',
    description: 'Implemented chatbot voice commands and AWS deployments. Optimized server response times by 40% through efficient database queries and caching.',
    technologies: ['Express', 'AWS', 'MongoDB', 'WebSockets', 'Redis']
  },
  {
    company: 'Suvidha Foundation',
    position: 'Frontend Developer',
    period: 'Jun 2023 – Aug 2023',
    description: 'Developed NLP-based search functionality and implemented accessibility improvements. Enhanced website performance by 30% through code optimization.',
    technologies: ['React', 'Tailwind CSS', 'NLP', 'Accessibility', 'SEO']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        {/* Professional cards layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >
              {/* 3D tilt wrapper with perspective */}
              <div className="[perspective:1000px]">
                {/* Gradient border */}
                <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-primary/30 via-secondary/30 to-transparent">
                  {/* Card */}
                  <motion.div
                    className="relative h-full min-h-[260px] rounded-2xl border border-neutral-200 dark:border-border/60 bg-white dark:bg-card/80 text-black dark:text-white backdrop-blur p-6 shadow-sm hover:shadow-xl hover:ring-1 hover:ring-primary/20 transition-shadow transition-colors transform-gpu focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                    whileHover={{ rotateX: -3, rotateY: 3, y: -6, scale: 1.015 }}
                    whileTap={{ scale: 0.995 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                    tabIndex={0}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Shine */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'radial-gradient(600px circle at 0% -20%, rgba(255,255,255,0.08), transparent 40%)' }} />

                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary shadow-sm">
                          <FiBriefcase />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold tracking-tight text-black dark:text-white">
                            {exp.company}
                          </h3>
                          <span className="inline-block mt-1 px-2 py-0.5 text-xs rounded-full bg-neutral-100 dark:bg-foreground/5 text-black/70 dark:text-foreground/80 border border-neutral-200 dark:border-border/40">
                            {exp.position}
                          </span>
                        </div>
                      </div>
                      <div className="hidden sm:flex items-center gap-2 text-xs px-2 py-1 rounded-full bg-neutral-100 dark:bg-primary/10 text-black/80 dark:text-primary border border-neutral-200 dark:border-primary/20">
                        <FiCalendar />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="my-3 h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-border to-transparent" />

                    {/* Period (mobile) */}
                    <div className="sm:hidden flex items-center gap-2 text-black/70 dark:text-foreground/70 text-xs mb-3">
                      <FiCalendar />
                      <span>{exp.period}</span>
                    </div>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-black/80 dark:text-foreground/80 mb-4">
                      {exp.description}
                    </p>

                    {/* Tech chips */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-full text-[11px] bg-neutral-100 dark:bg-gradient-to-b dark:from-primary/10 dark:to-primary/5 text-black dark:text-primary border border-neutral-200 dark:border-primary/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}