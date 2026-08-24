'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function IWKLPage() {
  return (
    <main className="bg-[#050505]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-[#FF5A00]/20 to-[#050505]">
        <div className="text-center z-10 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-8xl font-bold text-[#FFFFFF] mb-4"
          >
            IWKL
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl lg:text-4xl font-bold text-[#FF5A00] mb-4 md:mb-6"
          >
            INDIAN WOMEN'S KABADDI LEAGUE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm md:text-xl text-[#E7E7E7] max-w-2xl mx-auto mb-6 md:mb-8"
          >
            India's premier women kabaddi tournament featuring top teams, talented players, live matches, scores, and standings.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="https://iwkl.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF5A00] text-[#FFFFFF] px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:bg-[#FF6A00] transition-colors text-sm md:text-base"
            >
              Visit IWKL Official Website
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section - Premium Sports Layout */}
      <section id="about" className="relative py-12 md:py-20 lg:py-32 bg-[#050505] overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          {/* Subtle orange ambient glow */}
          <div className="absolute top-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#FF5A00]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-48 md:w-80 h-48 md:h-80 bg-[#6D2BA8]/10 rounded-full blur-3xl" />
          
          {/* Faint diagonal sports-inspired lines */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF5A00] to-transparent transform rotate-12" />
            <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF5A00] to-transparent transform -rotate-6" />
            <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF5A00] to-transparent transform rotate-6" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="order-2 lg:order-1"
            >
              {/* Eyebrow */}
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-block text-[#FF5A00] text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-3 md:mb-4"
              >
                About The League
              </motion.span>

              {/* Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-2xl md:text-4xl lg:text-6xl font-bold text-[#FFFFFF] leading-tight mb-4 md:mb-6"
              >
                THE POWER OF<br />
                <span className="text-[#FF5A00]">INDIAN WOMEN'S KABADDI LEAGUE</span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-[#E7E7E7] text-sm md:text-lg leading-relaxed mb-6 md:mb-8 max-w-xl"
              >
                IWKL is built to celebrate India's finest women kabaddi athletes and create a professional platform where talent, competition and ambition come together.
              </motion.p>

              {/* Statistics Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8"
              >
                {[
                  { value: '8+', label: 'Teams' },
                  { value: '100+', label: 'Athletes' },
                  { value: '1', label: 'Premier League' },
                  { value: 'Pan', label: 'India' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -5, boxShadow: '0 0 20px rgba(255, 90, 0, 0.3)' }}
                    className="bg-[#0A0A0A]/80 backdrop-blur-sm border border-[#FF5A00]/30 p-3 md:p-4 lg:p-6 rounded-lg"
                  >
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-[#FF5A00] mb-1">{stat.value}</div>
                    <div className="text-[#999999] text-xs md:text-sm uppercase tracking-wider">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href="https://iwkl.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF5A00] to-[#FF6A00] text-[#FFFFFF] px-6 md:px-8 py-2 md:py-4 rounded-full font-bold text-sm md:text-lg hover:shadow-lg hover:shadow-[#FF5A00]/30 transition-all duration-300"
                >
                  Explore IWKL
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side - Athlete Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="order-1 lg:order-2 relative"
            >
              {/* Orange glow behind athlete */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF5A00]/20 to-[#6D2BA8]/20 rounded-2xl blur-2xl" />
              
              {/* Athlete container with overflow for boundary effect */}
              <div className="relative bg-gradient-to-br from-[#0A0A0A] to-[#121212] rounded-2xl overflow-hidden border border-[#FF5A00]/20">
                {/* Arena lighting effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#FF5A00]/10 via-transparent to-transparent" />
                
                {/* Athlete image */}
                <div className="relative h-[300px] md:h-[450px] lg:h-[550px]">
                  <Image
                    src="/iwkl-athlete.png"
                    alt="IWKL Athlete Action Shot"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>

                {/* Orange rim light effect */}
                <div className="absolute inset-0 border-2 border-[#FF5A00]/20 rounded-2xl pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
