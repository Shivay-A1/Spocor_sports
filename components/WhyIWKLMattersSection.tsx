'use client';

import { motion } from 'framer-motion';
import { Heart, Trophy, TrendingUp, Award, Globe, MessageCircle } from 'lucide-react';

interface ImpactCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const impactCards: ImpactCard[] = [
  {
    icon: <Heart size={32} />,
    title: 'Women Empowerment',
    description: 'Breaking barriers and creating equal opportunities for women in professional sports.',
  },
  {
    icon: <Trophy size={32} />,
    title: 'Competitive Excellence',
    description: 'Setting new standards for women\'s kabaddi with world-class training and competition.',
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'Leadership Development',
    description: 'Building confident leaders through sports, mentorship, and personal growth programs.',
  },
  {
    icon: <Award size={32} />,
    title: 'National Recognition',
    description: 'Gaining nationwide acclaim and putting women\'s kabaddi on the national sports map.',
  },
  {
    icon: <Globe size={32} />,
    title: 'Sports Ecosystem Growth',
    description: 'Contributing to the broader development of sports infrastructure and opportunities.',
  },
  {
    icon: <MessageCircle size={32} />,
    title: 'Community Building',
    description: 'Creating a supportive community that celebrates women athletes and inspires change.',
  },
];

export default function WhyIWKLMattersSection() {
  return (
    <section className="relative py-12 lg:py-16 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-4 lg:mb-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#151515] mb-2"
          >
            Why Spocor Sports Matters
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-base lg:text-lg text-[#666666]"
          >
            Creating Impact Beyond the sports
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {impactCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.4 + index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -4 }}
              className="relative bg-[#F5F5F5] border border-[#FF5A00]/30 rounded-[16px] p-4 lg:p-6 text-center group"
            >
              {/* Orange Icon Circle */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 lg:w-14 lg:h-14 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#FF5A00] to-[#FF6A00] flex items-center justify-center"
              >
                <div className="text-[#FFFFFF]">
                  {card.icon}
                </div>
              </motion.div>

              {/* Title */}
              <h3 className="text-[#151515] font-bold text-base lg:text-lg mb-2">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-[#666666] text-xs lg:text-sm leading-relaxed">
                {card.description}
              </p>

              {/* Subtle hover glow */}
              <div className="absolute inset-0 rounded-[16px] bg-gradient-to-br from-[#FF5A00]/5 to-[#FF6A00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
