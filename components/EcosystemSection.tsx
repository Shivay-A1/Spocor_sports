'use client';

import { motion } from 'framer-motion';

const ecosystemNodes = [
  { label: 'ATHLETES', position: 'top' },
  { label: 'LEAGUES', position: 'top-middle' },
  { label: 'PARTNERS', position: 'middle' },
  { label: 'FANS', position: 'bottom-middle' },
  { label: 'GLOBAL IMPACT', position: 'bottom' },
];

export default function EcosystemSection() {
  return (
    <section className="py-6 lg:py-32 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-8 lg:mb-16"
        >
          <h2 className="text-xl md:text-2xl lg:text-5xl font-bold text-[#151515] mb-3 md:mb-4">OUR ECOSYSTEM</h2>
          <p className="text-sm md:text-base lg:text-xl text-[#666666]">Connecting the entire sports world.</p>
        </motion.div>

        <div className="relative flex flex-col items-center gap-4 md:gap-6 lg:gap-12">
          {ecosystemNodes.map((node, index) => (
            <motion.div
              key={node.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Node */}
              <div className="bg-[#F5F5F5] border-2 border-[#FF5A00] px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 rounded-full">
                <span className="text-[#151515] font-semibold text-xs md:text-sm lg:text-base">{node.label}</span>
              </div>
              
              {/* Connecting Line */}
              {index < ecosystemNodes.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-4 md:h-6 lg:h-12 bg-gradient-to-b from-[#FF5A00] to-[#FF6A00]"
                  style={{ transformOrigin: 'top' }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
