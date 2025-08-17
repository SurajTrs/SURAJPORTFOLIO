'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiDownload, FiMail } from 'react-icons/fi';
import Card3D from './Card3D';
import Scene3D from './Scene3D';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  
  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return <section className="relative min-h-screen flex items-center justify-center overflow-hidden"></section>;
  }
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Iron Man as background with hover face animation */}
      <Scene3D />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <Card3D 
          className="max-w-3xl mx-auto" 
          title="Portfolio"
          glowColor="#6366f1"
          rotationIntensity={0.3}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I am <span className="gradient-text animate-pulse-slow">Suraj Rawat</span>
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-2xl font-medium mb-6 text-foreground/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Software Engineer (Full-Stack AI/ML)
          </motion.h2>
          
          <motion.p 
            className="text-lg mb-8 text-foreground/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Building scalable full-stack apps & AI-driven systems with sub-second performance.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.a 
              href="/resume.pdf" 
              className="px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload className="animate-bounce" /> Download Resume
            </motion.a>
            <motion.div>
              <Link 
                href="#contact" 
                className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
              >
                <FiMail className="animate-pulse" /> Contact Me
              </Link>
            </motion.div>
          </motion.div>
          </motion.div>
        </Card3D>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-foreground/30 flex justify-center pt-2 glass">
          <motion.div 
            className="w-2 h-3 bg-primary rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}