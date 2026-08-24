'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import WhyIWKLMattersSection from '@/components/WhyIWKLMattersSection';

const leaders = [
  {
    name: 'Mr. Vvikrant Sanjay Choudhary',
    designation: 'Director & Co-founder',
    description: 'Carrying forward the founder\'s vision, he remains dedicated to fostering innovation, inclusivity, and growth in sports and leadership. With a strong commitment to empowering talent and creating a lasting impact, he ensures the organisation progresses with purpose, shaping a future of excellence and opportunity.',
    image: '/placeholder-leader-1.jpg',
  },
  {
    name: 'Mr. Ashok Kumar',
    designation: 'Founder and CEO',
    description: 'A dynamic leader spearheading organizational success and expansion. Passionate about women\'s empowerment, he actively supports initiatives that promote inclusivity and opportunities for women in sports and leadership. His vision extends beyond business, driving positive social impact alongside growth.',
    image: '/placeholder-leader-2.jpg',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <nav className="flex justify-end items-center p-4 lg:p-8 max-w-7xl mx-auto">
        <div className="flex gap-4 lg:gap-6">
          <Link href="/" className="text-[#666666] hover:text-[#FF5A00] transition-colors text-sm lg:text-base">Home</Link>
          <Link href="/about" className="text-[#FF5A00] text-sm lg:text-base">About</Link>
          <Link href="/contact" className="text-[#666666] hover:text-[#FF5A00] transition-colors text-sm lg:text-base">Contact</Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-16">
        <h1 className="text-2xl lg:text-5xl font-bold text-[#151515] mb-4 lg:mb-8">About Spocor sports</h1>
        
        <div className="grid md:grid-cols-2 gap-4 lg:gap-8 mb-8 lg:mb-16">
          <div className="bg-[#F5F5F5] p-4 lg:p-8 rounded-lg">
            <h2 className="text-lg lg:text-2xl font-bold text-[#FF5A00] mb-2 lg:mb-4">Our Mission</h2>
            <p className="text-[#666666] text-xs lg:text-base leading-relaxed">
              To revolutionize the sports industry through innovative technology and immersive experiences. 
              We believe in pushing boundaries and creating new possibilities for athletes and sports enthusiasts worldwide.
            </p>
          </div>
          
          <div className="bg-[#F5F5F5] p-4 lg:p-8 rounded-lg">
            <h2 className="text-lg lg:text-2xl font-bold text-[#FF5A00] mb-2 lg:mb-4">Our Vision</h2>
            <p className="text-[#666666] text-xs lg:text-base leading-relaxed">
              To become the global leader in sports technology, providing cutting-edge solutions that enhance 
              performance, engagement, and accessibility in the world of sports.
            </p>
          </div>
        </div>

        <div className="bg-[#FAFAFA] p-4 lg:p-8 rounded-lg mb-8 lg:mb-16">
          <h2 className="text-xl lg:text-3xl font-bold text-[#151515] mb-3 lg:mb-6">Who We Are</h2>
          <p className="text-[#666666] text-xs lg:text-base leading-relaxed mb-4">
            SPOCOR SPORTS is a pioneering sports technology company dedicated to transforming how people experience 
            and interact with sports. Founded by passionate athletes and tech innovators, we combine cutting-edge 
            3D technology, artificial intelligence, and data analytics to create immersive sports experiences.
          </p>
          <p className="text-[#666666] text-xs lg:text-base leading-relaxed">
            Our team of experts works tirelessly to develop solutions that help athletes improve their performance, 
            fans engage more deeply with their favorite sports, and organizations make data-driven decisions.
          </p>
        </div>

        {/* Leadership Team Section */}
        <div className="py-8 lg:py-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl lg:text-4xl lg:text-5xl font-bold text-[#151515] mb-3 lg:mb-4 text-center"
          >
            Leadership Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base lg:text-xl text-[#666666] mb-8 lg:mb-16 text-center"
          >
            Meet the Visionaries Behind Spacor Sports
          </motion.p>

          <div className="space-y-8 lg:space-y-24">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateY: index % 2 === 0 ? -15 : 15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: index * 0.3, ease: [0.16, 1, 0.3, 1] }}
                className={`grid md:grid-cols-2 gap-6 lg:gap-12 items-center ${index % 2 === 0 ? '' : 'md:grid-cols-2'}`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    transition={{ duration: 0.4 }}
                    className="relative aspect-square max-w-[200px] lg:max-w-[380px] mx-auto md:mx-0 rounded-2xl overflow-hidden bg-[#F5F5F5]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF5A00]/20 to-[#6D2BA8]/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 lg:w-28 h-16 lg:h-28 mx-auto mb-2 lg:mb-3 rounded-full bg-[#FF5A00]/20 flex items-center justify-center">
                          <span className="text-xl lg:text-3xl font-bold text-[#FF5A00]">{leader.name.charAt(0)}</span>
                        </div>
                        <p className="text-[#999999] text-xs">Image Placeholder</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.3 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.3 + 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="text-xl lg:text-3xl lg:text-4xl font-bold text-[#151515] mb-2"
                    >
                      {leader.name}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.3 + 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="text-[#FF5A00] text-sm lg:text-lg font-semibold mb-3 lg:mb-6"
                    >
                      {leader.designation}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.3 + 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="text-[#666666] text-xs lg:text-base leading-relaxed"
                    >
                      {leader.description}
                    </motion.p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Why IWKL Matters Section */}
      <WhyIWKLMattersSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
