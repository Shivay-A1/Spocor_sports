'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';

interface Athlete {
  name: string;
  sport: string;
  league: string;
  country: string;
  imagePlaceholder: string;
}

const athletes: Athlete[] = [];

export default function AthletesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      setCanScrollLeft(scrollRef.current.scrollLeft > 0);
      setCanScrollRight(
        scrollRef.current.scrollLeft <
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth
      );
    }
  };

  return (
    <section id="athletes" className="py-16 lg:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 lg:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#FFFFFF] mb-4">THE ATHLETES</h2>
          <p className="text-base lg:text-xl text-[#999999]">Talent deserves a platform.</p>
        </motion.div>

        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-[#121212] hover:bg-[#FF5A00] text-[#FFFFFF] p-2 lg:p-3 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-[#121212] hover:bg-[#FF5A00] text-[#FFFFFF] p-2 lg:p-3 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </button>

          {/* Athletes Cards */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide scroll-smooth"
          >
            {athletes.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full text-center py-16 lg:py-20"
              >
                <p className="text-xl lg:text-2xl font-bold text-[#FF5A00] mb-2">Coming Soon</p>
                <p className="text-sm lg:text-base text-[#999999]">Our athletes will be showcased here soon.</p>
              </motion.div>
            ) : (
              athletes.map((athlete, index) => (
                <motion.div
                  key={athlete.name}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -10 }}
                  className="flex-shrink-0 w-80 bg-[#121212] rounded-2xl overflow-hidden group"
                >
                  {/* Image Placeholder */}
                  <div className="h-64 bg-gradient-to-br from-[#0B0B0B] to-[#121212] flex items-center justify-center text-6xl">
                    {athlete.imagePlaceholder}
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">{athlete.name}</h3>
                    <div className="space-y-1">
                      <p className="text-[#FF5A00] text-sm font-medium">{athlete.sport}</p>
                      <p className="text-[#999999] text-sm">{athlete.league}</p>
                      <p className="text-[#999999] text-sm">{athlete.country}</p>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
