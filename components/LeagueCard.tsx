'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface LeagueCardProps {
  title: string;
  subtitle: string;
  status: string;
  isFlagship?: boolean;
  ctaText: string;
  delay?: number;
  href?: string;
}

export default function LeagueCard({ title, subtitle, status, isFlagship = false, ctaText, delay = 0, href }: LeagueCardProps) {
  const CardContent = (
    <>
      {/* Card Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${
        isFlagship 
          ? 'from-[#FF5A00]/20 to-[#121212]' 
          : 'from-[#121212] to-[#0B0B0B]'
      }`} />
      
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF5A00]/0 via-[#FF5A00]/10 to-[#FF5A00]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative p-8 lg:p-10">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2 }}
          className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-6 ${
            isFlagship 
              ? 'bg-[#FF5A00] text-[#FFFFFF]' 
              : 'bg-[#121212] text-[#999999]'
          }`}
        >
          {status}
        </motion.div>
        
        {/* Title */}
        <h3 className={`font-bold text-[#FFFFFF] mb-2 ${
          isFlagship ? 'text-5xl lg:text-6xl' : 'text-4xl lg:text-5xl'
        }`}>
          {title}
        </h3>
        
        {/* Subtitle */}
        <p className="text-[#E7E7E7] text-sm lg:text-base mb-8">
          {subtitle}
        </p>
        
        {/* Premium CTA Button for Flagship */}
        {isFlagship ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-gradient-to-r from-[#FF5A00] to-[#FF6A00] text-[#FFFFFF] font-bold px-6 py-3 rounded-full shadow-lg shadow-[#FF5A00]/30 hover:shadow-[#FF5A00]/50 transition-all duration-300"
          >
            EXPLORE NOW
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-[#FF5A00] font-semibold group-hover:text-[#FF6A00] transition-colors"
          >
            {ctaText}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        )}
      </div>
      
      {/* Orange Border Glow on Hover */}
      {isFlagship && (
        <div className="absolute inset-0 rounded-2xl border-2 border-[#FF5A00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.02, y: -5 }}
          className={`relative group overflow-hidden rounded-2xl cursor-pointer ${
            isFlagship ? 'border-2 border-[#FF5A00]' : 'border border-[#121212]'
          }`}
        >
          {CardContent}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={`relative group overflow-hidden rounded-2xl ${
        isFlagship ? 'border-2 border-[#FF5A00]' : 'border border-[#121212]'
      }`}
    >
      {CardContent}
    </motion.div>
  );
}
