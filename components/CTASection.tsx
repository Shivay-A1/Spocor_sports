'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-16 lg:py-32 bg-[#FFFFFF] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF5A00]/5 via-transparent to-[#FF5A00]/3" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF5A00]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF5A00]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl lg:text-6xl font-bold text-[#151515] mb-4 lg:mb-6">
            THE FUTURE OF SPORTS STARTS HERE.
          </h2>
          <p className="text-base lg:text-xl text-[#666666] mb-8 lg:mb-12 max-w-3xl mx-auto">
            Join Spacor Sports as an athlete, partner, investor, media organization or sports enthusiast.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FF5A00] text-[#FFFFFF] px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold text-base lg:text-lg hover:bg-[#FF6A00] transition-colors"
              >
                JOIN THE MOVEMENT
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-[#FF5A00] text-[#FF5A00] px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold text-base lg:text-lg hover:bg-[#FF5A00]/10 transition-colors flex items-center justify-center gap-2"
              >
                CONTACT US
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
