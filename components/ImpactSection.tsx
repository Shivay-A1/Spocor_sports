'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Quote } from 'lucide-react';
import Image from 'next/image';

export default function ImpactSection() {
  return (
    <section className="py-6 lg:py-10 bg-[#FFFFFF] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5A00] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6D2BA8] rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-4 lg:gap-6">
          {/* Left Area - Image + Content (62-65%) */}
          <div className="lg:col-span-3 relative">
            {/* Paint brush edge effect */}
            <div className="absolute -inset-2 opacity-30">
              <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
                <path 
                  d="M0,0 Q50,10 100,5 T200,8 T300,3 T400,10 L400,0 Z" 
                  fill="none" 
                  stroke="#000000" 
                  strokeWidth="2"
                  opacity="0.3"
                />
                <path 
                  d="M0,300 Q50,290 100,295 T200,292 T300,297 T400,290 L400,300 Z" 
                  fill="none" 
                  stroke="#000000" 
                  strokeWidth="2"
                  opacity="0.3"
                />
                <path 
                  d="M0,0 Q10,50 5,100 T8,200 T3,300 L0,300 Z" 
                  fill="none" 
                  stroke="#000000" 
                  strokeWidth="2"
                  opacity="0.3"
                />
                <path 
                  d="M400,0 Q390,50 395,100 T392,200 T397,300 L400,300 Z" 
                  fill="none" 
                  stroke="#000000" 
                  strokeWidth="2"
                  opacity="0.3"
                />
              </svg>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 lg:gap-6 relative z-10">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -40, scale: 1.05 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                  <Image
                    src="/impact-banner.png"
                    alt="Young athletes training"
                    fill
                    className="object-cover"
                  />
                  {/* Decorative dotted pattern */}
                  <div className="absolute top-2 md:top-4 left-2 md:left-4 w-12 md:w-16 h-12 md:h-16 border-2 border-dashed border-[#FF5A00]/30 rounded-full" />
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="inline-block text-[#FF5A00] text-xs lg:text-sm font-semibold uppercase tracking-wider mb-2 lg:mb-4">
                    OUR IMPACT
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="text-lg lg:text-3xl lg:text-4xl font-bold text-[#151515] mb-3 lg:mb-6 leading-tight"
                >
                  GRASSROOTS TODAY,<br />
                  CHAMPIONS TOMORROW.
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[#666666] text-xs lg:text-base leading-relaxed mb-4 lg:mb-8"
                >
                  We believe every champion has a starting point.
                  Our grassroots initiatives nurture identity, confidence and
                  mental strength at every level.
                </motion.p>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 bg-white border border-[#FF5A00] text-[#FF5A00] font-semibold px-3 lg:px-6 py-2 lg:py-3 rounded-full hover:bg-[#FF5A00] hover:text-white transition-all duration-300 w-fit text-xs lg:text-base"
                >
                  KNOW MORE
                  <ArrowRight size={14} />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Right Area - Quote Card (35-38%) */}
          <div className="lg:col-span-2 relative">
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="relative bg-gradient-to-br from-[#4B168C] to-[#6D2BA8] p-4 lg:p-12 overflow-hidden"
              style={{
                clipPath: 'polygon(5% 0%, 95% 2%, 100% 10%, 98% 90%, 92% 100%, 8% 98%, 0% 92%, 2% 8%)'
              }}
            >
              {/* Paint brush edge effect - multiple layers */}
              <div className="absolute -inset-3 opacity-50">
                <svg className="w-full h-full" viewBox="0 0 200 300" preserveAspectRatio="none">
                  {/* Top brush stroke */}
                  <path 
                    d="M0,0 Q20,8 40,5 T80,3 T120,7 T160,2 T180,8 T200,5 L200,0 Z" 
                    fill="none" 
                    stroke="#6D2BA8" 
                    strokeWidth="6"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                  <path 
                    d="M5,5 Q25,12 45,8 T85,6 T125,10 T165,5 T185,11 T200,8" 
                    fill="none" 
                    stroke="#4B168C" 
                    strokeWidth="4"
                    strokeLinecap="round"
                    opacity="0.4"
                  />
                  
                  {/* Bottom brush stroke - thicker orange */}
                  <path 
                    d="M0,295 Q30,285 60,290 T100,282 T140,288 T180,280 T200,290 L200,300 L0,300 Z" 
                    fill="#FF5A00"
                    opacity="0.7"
                  />
                  <path 
                    d="M0,300 Q20,292 50,295 T90,288 T130,292 T170,285 T200,295" 
                    fill="none" 
                    stroke="#FF6A00" 
                    strokeWidth="8"
                    strokeLinecap="round"
                    opacity="0.8"
                  />
                  
                  {/* Left brush stroke */}
                  <path 
                    d="M0,0 Q8,40 4,80 T6,140 T2,200 T8,260 T5,300 L0,300 Z" 
                    fill="none" 
                    stroke="#4B168C" 
                    strokeWidth="5"
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                  
                  {/* Right brush stroke */}
                  <path 
                    d="M200,0 Q192,40 196,80 T194,140 T198,200 T192,260 T195,300 L200,300 Z" 
                    fill="none" 
                    stroke="#6D2BA8" 
                    strokeWidth="5"
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                  
                  {/* Additional paint splatters */}
                  <circle cx="180" cy="20" r="3" fill="#FF5A00" opacity="0.4" />
                  <circle cx="15" cy="280" r="2" fill="#FFFFFF" opacity="0.3" />
                  <circle cx="190" cy="270" r="2.5" fill="#6D2BA8" opacity="0.5" />
                </svg>
              </div>
              
              {/* Subtle white/orange paint strokes */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-white/5 rounded-full blur-xl" />
              <div className="absolute bottom-8 left-8 w-16 h-16 bg-[#FF5A00]/10 rounded-full blur-xl" />
              
              {/* Additional paint strokes */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path 
                    d="M80,0 Q90,20 85,40 T95,60 T80,80" 
                    fill="none" 
                    stroke="#FF5A00" 
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 w-24 h-24 opacity-15">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path 
                    d="M0,80 Q20,90 40,85 T60,95 T80,80" 
                    fill="none" 
                    stroke="#FFFFFF" 
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Quote mark */}
              <div className="text-[#FF5A00] mb-4 lg:mb-6">
                <Quote size={32} />
              </div>

              {/* Quote */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-white text-base lg:text-2xl lg:text-3xl font-bold mb-4 lg:mb-8 leading-tight"
              >
                "Uniting communities.<br />
                Inspiring generations."
              </motion.p>

              {/* Handwritten accent */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-[#FF5A00] text-sm lg:text-lg font-semibold italic"
              >
                Team Spacor Sports
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
