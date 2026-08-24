'use client';

import { motion } from 'framer-motion';
import { Trophy, User, Megaphone, Handshake, TrendingUp } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Trophy size={24} />,
    title: 'LEAGUE MANAGEMENT',
    description: 'End-to-end management of world-class sporting leagues.',
  },
  {
    icon: <User size={24} />,
    title: 'ATHLETE EMPOWERMENT',
    description: 'Creating opportunities and building careers for athletes.',
  },
  {
    icon: <Megaphone size={24} />,
    title: 'COMMUNITY INITIATIVES',
    description: 'Grassroots programs that drive social change.',
  },
  {
    icon: <Handshake size={24} />,
    title: 'STRATEGIC PARTNERSHIPS',
    description: 'Collaborating with brands that share our vision.',
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'BRAND & IP DEVELOPMENT',
    description: 'Building powerful properties that inspire generations.',
  },
];

export default function WhatWeDoSection() {
  return (
    <section className="py-6 lg:py-10 bg-[#FFFFFF]">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-6 lg:mb-8"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block text-[#FF5A00] text-xs lg:text-sm font-semibold uppercase tracking-wider mb-3 lg:mb-4"
          >
            WHAT WE DO
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#151515] mb-4"
          >
            DRIVING IMPACT. CREATING LEGACY.
          </motion.h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.05 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -2 }}
              className="relative px-3 lg:px-8 py-4 lg:py-8 group"
            >
              {/* Vertical Divider */}
              {index < services.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute right-0 top-8 bottom-8 w-px bg-[#E5E5E5] hidden lg:block"
                />
              )}

              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.6 + index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="w-10 h-10 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-[#FF5A00]/10 to-[#6D3B8C]/10 flex items-center justify-center mb-3 lg:mb-6 mx-auto lg:mx-0 group-hover:shadow-lg group-hover:shadow-[#FF5A00]/20 transition-all duration-300"
              >
                <div className="text-[#FF5A00] group-hover:text-[#FF6A00] transition-colors">
                  {service.icon}
                </div>
              </motion.div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg font-bold text-[#151515] mb-3 text-center lg:text-left group-hover:text-[#FF5A00] transition-colors relative"
              >
                {service.title}
                <motion.span
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  className="absolute bottom-0 left-0 h-0.5 bg-[#FF5A00] hidden lg:block"
                />
              </motion.h3>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[#666666] text-sm leading-relaxed text-center lg:text-left"
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
