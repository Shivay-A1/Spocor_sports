'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import LeagueCard from '@/components/LeagueCard';
import ImpactStats from '@/components/ImpactStats';
import AthletesSection from '@/components/AthletesSection';
import EcosystemSection from '@/components/EcosystemSection';
import PartnersSection from '@/components/PartnersSection';
import MediaSection from '@/components/MediaSection';
import VisionSection from '@/components/VisionSection';
import WhatWeDoSection from '@/components/WhatWeDoSection';
import ImpactSection from '@/components/ImpactSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import ParticlesOverlay from '@/components/ParticlesOverlay';
import Link from 'next/link';

export default function Home() {
  const leagues = [
    {
      title: 'IWKL',
      subtitle: 'INDIAN WOMEN\'S KABADDI LEAGUE',
      status: 'FLAGSHIP LEAGUE',
      isFlagship: true,
      ctaText: 'EXPLORE IWKL',
      delay: 0,
      href: '/iwkl'
    }
  ];

  return (
    <main className="bg-[#050505]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full lg:h-screen bg-[#050505]">
        {/* Mobile Hero */}
        <div className="lg:hidden relative w-full">
          <div className="relative w-full aspect-[16/9]">
            <Image
              src="/banner.png"
              alt="SPACOR SPORTS Banner"
              fill
              className="object-cover"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-[#050505]/40" />
            
            <div className="absolute inset-0 z-5">
              <ParticlesOverlay />
            </div>

            <div className="absolute inset-0 flex items-center z-10">
              <div className="w-full px-4">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="max-w-xl text-left"
                >
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[#FF5A00] font-semibold mb-2 uppercase tracking-wider text-xs md:text-sm"
                  >
                    ONE VISION. LIMITLESS POSSIBILITIES.
                  </motion.p>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="text-xl md:text-2xl lg:text-3xl font-bold text-[#FFFFFF] mb-2 leading-tight"
                  >
                    BUILDING THE FUTURE OF <span className="text-[#FF5A00]">SPORTS</span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="text-xs md:text-sm text-[#E7E7E7] mb-3 leading-relaxed"
                  >
                    Spacor Sports is dedicated to creating world-class leagues that inspire, empower and elevate athletes across the globe.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-2"
                  >
                    <Link href="#leagues">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#FF5A00] text-[#FFFFFF] px-3 py-1.5 rounded-full font-semibold hover:bg-[#FF6A00] transition-colors text-xs md:text-sm"
                      >
                        EXPLORE OUR LEAGUES
                      </motion.button>
                    </Link>
                    <Link href="/about">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-transparent border-2 border-[#FF5A00] text-[#FF5A00] px-3 py-1.5 rounded-full font-semibold hover:bg-[#FF5A00]/10 transition-colors flex items-center justify-center gap-2 text-xs md:text-sm"
                      >
                        ABOUT SPACOR
                        <ArrowRight size={12} />
                      </motion.button>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Hero */}
        <div className="hidden lg:block relative w-full h-screen">
          <div className="absolute inset-0 z-0">
            <Image
              src="/banner.png"
              alt="SPACOR SPORTS Banner"
              fill
              className="object-cover object-center"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-[#050505]/30" />
          </div>

          <div className="absolute inset-0 z-5">
            <ParticlesOverlay />
          </div>

          <div className="absolute inset-0 flex items-center z-10">
            <div className="w-full px-12 xl:px-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-2xl"
              >
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[#FF5A00] font-semibold mb-4 uppercase tracking-wider text-sm"
                >
                  ONE VISION. LIMITLESS POSSIBILITIES.
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-7xl font-bold text-[#FFFFFF] mb-6 leading-tight"
                >
                  BUILDING THE FUTURE OF <span className="text-[#FF5A00]">SPORTS</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="text-xl text-[#E7E7E7] mb-8 leading-relaxed"
                >
                  Spacor Sports is dedicated to creating world-class leagues that inspire, empower and elevate athletes across the globe.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-4"
                >
                  <Link href="#leagues">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#FF5A00] text-[#FFFFFF] px-8 py-4 rounded-full font-semibold hover:bg-[#FF6A00] transition-colors text-base"
                    >
                      EXPLORE OUR LEAGUES
                    </motion.button>
                  </Link>
                  <Link href="/about">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-transparent border-2 border-[#FF5A00] text-[#FF5A00] px-8 py-4 rounded-full font-semibold hover:bg-[#FF5A00]/10 transition-colors flex items-center justify-center gap-2 text-base"
                    >
                      ABOUT SPACOR
                      <ArrowRight size={16} />
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
          >
            <div className="w-6 h-10 border-2 border-[#FF5A00] rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-[#FF5A00] rounded-full"
              />
            </div>
          </motion.div>
        </div>

        {/* Mobile Hero */}
        <div className="lg:hidden relative w-full">
          <div className="relative w-full aspect-[16/9]">
            <Image
              src="/banner.png"
              alt="SPACOR SPORTS Banner"
              fill
              className="object-cover"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-[#050505]/40" />
            
            <div className="absolute inset-0 z-5">
              <ParticlesOverlay />
            </div>

            <div className="absolute inset-0 flex items-center z-10">
              <div className="w-full px-4">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="max-w-xl text-left"
                >
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[#FF5A00] font-semibold mb-2 uppercase tracking-wider text-xs md:text-sm"
                  >
                    ONE VISION. LIMITLESS POSSIBILITIES.
                  </motion.p>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="text-xl md:text-2xl lg:text-3xl font-bold text-[#FFFFFF] mb-2 leading-tight"
                  >
                    BUILDING THE FUTURE OF <span className="text-[#FF5A00]">SPORTS</span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="text-xs md:text-sm text-[#E7E7E7] mb-3 leading-relaxed"
                  >
                    Spacor Sports is dedicated to creating world-class leagues that inspire, empower and elevate athletes across the globe.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-2"
                  >
                    <Link href="#leagues">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#FF5A00] text-[#FFFFFF] px-3 py-1.5 rounded-full font-semibold hover:bg-[#FF6A00] transition-colors text-xs md:text-sm"
                      >
                        EXPLORE OUR LEAGUES
                      </motion.button>
                    </Link>
                    <Link href="/about">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-transparent border-2 border-[#FF5A00] text-[#FF5A00] px-3 py-1.5 rounded-full font-semibold hover:bg-[#FF5A00]/10 transition-colors flex items-center justify-center gap-2 text-xs md:text-sm"
                      >
                        ABOUT SPACOR
                        <ArrowRight size={12} />
                      </motion.button>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 hidden lg:block"
        >
          <div className="w-6 h-10 border-2 border-[#FF5A00] rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-[#FF5A00] rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Ecosystem Section */}
      <EcosystemSection />

      {/* Our Leagues Heading Section */}
      <section className="py-6 lg:py-0 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#151515] mb-3 lg:mb-4">
              OUR LEAGUES
            </h2>
            <p className="text-sm md:text-base lg:text-xl text-[#666666]">
              Creating platforms where sport becomes opportunity
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Leagues Section */}
      <section id="leagues" className="relative lg:py-6 bg-[#FFFFFF]">
        {/* Banner Background */}
        <div className="relative w-full">
          {/* Mobile Banner */}
          <div className="lg:hidden relative w-full">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/new-banner.png"
                alt="Leagues Banner"
                fill
                className="object-contain"
                priority
                unoptimized
              />
              <div className="absolute inset-0 z-10 flex items-end">
                <div className="max-w-7xl mx-auto px-4 w-full pb-6">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-xl ml-2"
                  >
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#FFFFFF] mb-2">
                      IWKL
                    </h3>
                    <p className="text-[#E7E7E7] text-xs md:text-sm mb-3">
                      INDIAN WOMEN'S KABADDI LEAGUE
                    </p>
                    <Link href="/iwkl">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 bg-gradient-to-r from-[#FF5A00] to-[#FF6A00] text-[#FFFFFF] font-bold px-3 py-1.5 rounded-full shadow-lg shadow-[#FF5A00]/30 hover:shadow-[#FF5A00]/50 transition-all duration-300 text-xs md:text-sm"
                      >
                        EXPLORE NOW
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Banner */}
          <div className="hidden lg:block relative w-full h-[80vh]">
            <div className="absolute inset-0 z-0">
              <Image
                src="/new-banner.png"
                alt="Leagues Banner"
                fill
                className="object-cover object-center"
                priority
                unoptimized
              />
            </div>
            
            <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 h-full flex items-start">
              <div className="mt-48 mr-80">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="max-w-2xl"
                >
                  <h3 className="text-6xl font-bold text-[#FFFFFF] mb-3">
                    IWKL
                  </h3>
                  <p className="text-[#E7E7E7] text-xl mb-10">
                    INDIAN WOMEN'S KABADDI LEAGUE
                  </p>
                  <Link href="/iwkl">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-3 bg-gradient-to-r from-[#FF5A00] to-[#FF6A00] text-[#FFFFFF] font-bold px-8 py-4 rounded-full shadow-lg shadow-[#FF5A00]/30 hover:shadow-[#FF5A00]/50 transition-all duration-300 text-lg"
                    >
                      EXPLORE NOW
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <VisionSection />

      {/* What We Do Section */}
      <WhatWeDoSection />

      {/* Impact Section */}
      <ImpactSection />

      {/* Media Section */}
      <MediaSection />

      {/* Athletes Section - Hidden for now */}
      {/* <AthletesSection /> */}

      {/* Partners Section - Hidden for now */}
      {/* <PartnersSection /> */}

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
