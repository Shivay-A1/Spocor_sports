'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ParticlesOverlay from '@/components/ParticlesOverlay';
import { isMobileDevice } from '@/lib/deviceDetection';
import { useState, useEffect } from 'react';

export default function VisionSection() {
  const [isActualMobile, setIsActualMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsActualMobile(isMobileDevice());
  }, []);

  return (
    <section className="relative lg:h-screen py-6 lg:py-12 bg-[#050505]">
      {/* Mobile Banner */}
      <div className={!isClient ? "lg:hidden relative w-full" : (isActualMobile ? "relative w-full" : "hidden relative w-full")}>
        <div className="relative w-full aspect-[16/9]">
          <Image
            src="/iwkl-banner.png"
            alt="Spacor Sports Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#050505]/30" />
          
          {/* Particles Animation */}
          <div className="absolute inset-0 z-5">
            <ParticlesOverlay />
          </div>
          
          <div className="absolute inset-0 z-10 flex items-start">
            <div className="w-full px-4 pt-4">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-xl"
              >
                <h3 className="text-[#FF5A00] font-semibold mb-1 uppercase tracking-wider text-[10px]">About Spacor Sports</h3>
                <h2 className="text-base md:text-xl font-bold text-[#FFFFFF] mb-1 leading-tight">
                  WE DON'T JUST MANAGE SPORTS.
                </h2>
                <h2 className="text-base md:text-xl font-bold text-[#FF5A00] mb-2 leading-tight">
                  WE TRANSFORM LIVES.
                </h2>
                <p className="text-[#E7E7E7] text-[10px] md:text-xs leading-relaxed mb-1">
                  Spacor Sports is building professional sports ecosystems that create opportunities for athletes, 
                  communities, partners and fans.
                </p>
                <p className="text-[#999999] text-[9px] md:text-[10px] leading-relaxed">
                  Through world-class leagues, innovative technology, and a commitment to excellence, we're 
                  redefining what sports can be — not just entertainment, but a vehicle for social change, 
                  economic growth, and human potential.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Banner */}
      <div className={!isClient ? "hidden lg:block relative w-full h-screen" : (isActualMobile ? "hidden relative w-full h-screen" : "hidden lg:block relative w-full h-screen")}>
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
        
        <div className="w-full px-12 xl:px-20 relative z-10 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl"
          >
            <h3 className="text-[#FF5A00] font-semibold mb-3 uppercase tracking-wider text-base">About Spacor Sports</h3>
            <h2 className="text-5xl font-bold text-[#FFFFFF] mb-6 leading-tight">
              WE DON'T JUST MANAGE SPORTS.
            </h2>
            <h2 className="text-5xl font-bold text-[#FF5A00] mb-8 leading-tight">
              WE TRANSFORM LIVES.
            </h2>
            <p className="text-[#E7E7E7] text-lg leading-relaxed mb-6">
              Spacor Sports is building professional sports ecosystems that create opportunities for athletes, 
              communities, partners and fans.
            </p>
            <p className="text-[#999999] text-base leading-relaxed">
              Through world-class leagues, innovative technology, and a commitment to excellence, we're 
              redefining what sports can be — not just entertainment, but a vehicle for social change, 
              economic growth, and human potential.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
