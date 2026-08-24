'use client';

import { motion } from 'framer-motion';

interface Partner {
  name: string;
  category: string;
}

const partners: Partner[] = [
  { name: 'Partner 1', category: 'Technology' },
  { name: 'Partner 2', category: 'Media' },
  { name: 'Partner 3', category: 'Sports Equipment' },
  { name: 'Partner 4', category: 'Broadcasting' },
  { name: 'Partner 5', category: 'Healthcare' },
  { name: 'Partner 6', category: 'Finance' },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="py-24 lg:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#FFFFFF] mb-4">POWERED BY PARTNERS</h2>
          <p className="text-xl text-[#999999]">Building the future together.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#121212] p-6 rounded-lg flex flex-col items-center justify-center aspect-square hover:border hover:border-[#FF5A00] transition-all cursor-pointer group"
            >
              <div className="w-16 h-16 bg-[#0B0B0B] rounded-full mb-4 flex items-center justify-center group-hover:bg-[#FF5A00]/20 transition-colors">
                <span className="text-2xl text-[#999999] group-hover:text-[#FF5A00] transition-colors">🏢</span>
              </div>
              <h3 className="text-[#FFFFFF] font-semibold text-sm mb-1">{partner.name}</h3>
              <p className="text-[#999999] text-xs">{partner.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
