'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Video, Newspaper, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface MediaItem {
  type: 'news' | 'video' | 'event';
  title: string;
  category: string;
  date: string;
  image?: string;
}

const mediaItems: MediaItem[] = [
  { type: 'news', title: 'IWKL Season 1 Announced', category: 'League Update', date: '2026', image: '/iwkl-banner-latest.png' },
  { type: 'video', title: 'Behind the Scenes: Athlete Training', category: 'Video', date: '2026' },
  { type: 'event', title: 'Spacor Sports Annual Summit', category: 'Event', date: '2026' },
  { type: 'news', title: 'New Partnership Announcement', category: 'Business', date: '2026' },
  { type: 'video', title: 'Match Highlights: Finals', category: 'Video', date: '2026' },
  { type: 'news', title: 'Athlete Spotlight: Rising Stars', category: 'Athletes', date: '2026' },
];

const icons = {
  news: Newspaper,
  video: Video,
  event: Calendar,
};

export default function MediaSection() {
  return (
    <section id="media" className="py-8 lg:py-12 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row justify-between items-start mb-4 lg:mb-6 gap-4"
        >
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#151515] mb-4">INSIDE SPACOR</h2>
            <p className="text-base lg:text-xl text-[#666666]">Latest news, updates, and stories.</p>
          </div>
          <motion.button
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:flex items-center gap-2 text-[#FF5A00] font-semibold text-sm lg:text-base ml-auto"
          >
            VIEW ALL MEDIA
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {mediaItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="bg-[#F5F5F5] rounded-xl overflow-hidden group cursor-pointer h-full flex flex-col"
            >
              {/* Image or Placeholder */}
              {item.image ? (
                <div className="h-48 lg:h-64 relative flex-shrink-0 bg-[#E7E7E7]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="h-48 lg:h-64 bg-gradient-to-br from-[#E7E7E7] to-[#F5F5F5] flex items-center justify-center flex-shrink-0">
                  {React.createElement(icons[item.type], { size: 36, className: 'text-[#FF5A00]/50' })}
                </div>
              )}
              
              {/* Content */}
              <div className="p-4 lg:p-6">
                <div className="flex items-center gap-2 mb-2 lg:mb-3">
                  <span className="text-[#FF5A00] text-xs font-semibold uppercase">{item.category}</span>
                  <span className="text-[#666666] text-xs">• {item.date}</span>
                </div>
                <h3 className="text-[#151515] text-sm lg:text-base font-semibold mb-2 group-hover:text-[#FF5A00] transition-colors">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
          className="lg:hidden mt-6 lg:mt-8 flex items-center justify-center gap-2 text-[#FF5A00] font-semibold w-full text-sm lg:text-base"
        >
          VIEW ALL MEDIA
          <ArrowRight size={18} />
        </motion.button>
      </div>
    </section>
  );
}
