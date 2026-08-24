'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ParticlesOverlay from '@/components/ParticlesOverlay';

export default function VisionSection() {
  return (
    <section className="relative min-h-screen lg:h-screen py-8 lg:py-12 bg-[#050505]">
      {/* Banner Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/iwkl-banner.png"
          alt="Spacor Sports Banner"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#050505]/30" />
      </div>
      
      {/* Particles Animation */}
      <div className="absolute inset-0 z-5">
        <ParticlesOverlay />
      </div>
      
      <div className="w-full px-4 lg:px-12 xl:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          <h3 className="text-[#FF5A00] font-semibold mb-3 uppercase tracking-wider text-sm lg:text-base">About Spacor Sports</h3>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#FFFFFF] mb-4 lg:mb-6 leading-tight">
            WE DON'T JUST MANAGE SPORTS.
          </h2>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#FF5A00] mb-6 lg:mb-8 leading-tight">
            WE TRANSFORM LIVES.
          </h2>
          <p className="text-[#E7E7E7] text-base lg:text-lg leading-relaxed mb-4 lg:mb-6">
            Spacor Sports is building professional sports ecosystems that create opportunities for athletes, 
            communities, partners and fans.
          </p>
          <p className="text-[#999999] text-sm lg:text-base leading-relaxed">
            Through world-class leagues, innovative technology, and a commitment to excellence, we're 
            redefining what sports can be — not just entertainment, but a vehicle for social change, 
            economic growth, and human potential.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
