'use client';

import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <nav className="flex justify-end items-center p-4 lg:p-8 max-w-7xl mx-auto">
        <div className="flex gap-4 lg:gap-6">
          <Link href="/" className="text-[#666666] hover:text-[#FF5A00] transition-colors text-sm lg:text-base">Home</Link>
          <Link href="/about" className="text-[#666666] hover:text-[#FF5A00] transition-colors text-sm lg:text-base">About</Link>
          <Link href="/contact" className="text-[#FF5A00] text-sm lg:text-base">Contact</Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-16">
        <h1 className="text-2xl lg:text-5xl font-bold text-[#151515] mb-4 lg:mb-8">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
          <div>
            <h2 className="text-lg lg:text-2xl font-bold text-[#FF5A00] mb-3 lg:mb-6">Get in Touch</h2>
            <p className="text-[#666666] text-xs lg:text-base mb-4 lg:mb-8 leading-relaxed">
              Have questions about our services? Want to partner with us? Fill out the form and our team 
              will get back to you within 24 hours.
            </p>

            <div className="space-y-3 lg:space-y-6">
              <div className="flex items-start gap-3 lg:gap-4">
                <div className="w-8 h-8 lg:w-12 lg:h-12 bg-[#F5F5F5] rounded-lg flex items-center justify-center">
                  <span className="text-[#FF5A00] text-sm lg:text-xl">📍</span>
                </div>
                <div>
                  <h3 className="text-[#151515] font-semibold mb-1 text-xs lg:text-base">Address</h3>
                  <p className="text-[#666666] text-xs lg:text-base leading-relaxed">
                    A-901, Ansal Tanushree,<br />
                    NH-24, Ghaziabad - 201002,<br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 lg:gap-4">
                <div className="w-8 h-8 lg:w-12 lg:h-12 bg-[#F5F5F5] rounded-lg flex items-center justify-center">
                  <span className="text-[#FF5A00] text-sm lg:text-xl">📧</span>
                </div>
                <div>
                  <h3 className="text-[#151515] font-semibold mb-1 text-xs lg:text-base">Email</h3>
                  <p className="text-[#666666] text-xs lg:text-base">Spacorsports@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3 lg:gap-4">
                <div className="w-8 h-8 lg:w-12 lg:h-12 bg-[#F5F5F5] rounded-lg flex items-center justify-center">
                  <span className="text-[#FF5A00] text-sm lg:text-xl">📞</span>
                </div>
                <div>
                  <h3 className="text-[#151515] font-semibold mb-1 text-xs lg:text-base">Phone</h3>
                  <p className="text-[#666666] text-xs lg:text-base">+91 98765 43210</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F5F5F5] p-4 lg:p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-3 lg:space-y-6">
              <div>
                <label className="block text-[#151515] mb-2 font-medium text-xs lg:text-base">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#FFFFFF] border border-[#E5E5E5] rounded-lg px-3 lg:px-4 py-2 lg:py-3 text-[#151515] focus:border-[#FF5A00] focus:outline-none transition-colors text-xs lg:text-base"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-[#151515] mb-2 font-medium text-xs lg:text-base">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-[#FFFFFF] border border-[#E5E5E5] rounded-lg px-2 lg:px-4 py-2 lg:py-3 text-[#151515] focus:border-[#FF5A00] focus:outline-none transition-colors text-xs lg:text-base"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-[#151515] mb-2 font-medium text-xs lg:text-base">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-[#FFFFFF] border border-[#E5E5E5] rounded-lg px-2 lg:px-4 py-2 lg:py-3 text-[#151515] focus:border-[#FF5A00] focus:outline-none transition-colors text-xs lg:text-base"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-[#151515] mb-2 font-medium text-xs lg:text-base">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="w-full bg-[#FFFFFF] border border-[#E5E5E5] rounded-lg px-3 lg:px-4 py-2 lg:py-3 text-[#151515] focus:border-[#FF5A00] focus:outline-none transition-colors resize-none text-xs lg:text-base"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF5A00] text-[#FFFFFF] py-2 lg:py-3 rounded-lg font-semibold hover:bg-[#FF6A00] transition-colors text-xs lg:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
