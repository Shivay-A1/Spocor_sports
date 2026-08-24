import Link from 'next/link';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <nav className="flex justify-end items-center p-4 lg:p-8 max-w-7xl mx-auto">
        <div className="flex gap-4 lg:gap-6">
          <Link href="/" className="text-[#666666] hover:text-[#FF5A00] transition-colors text-sm lg:text-base">Home</Link>
          <Link href="/about" className="text-[#666666] hover:text-[#FF5A00] transition-colors text-sm lg:text-base">About</Link>
          <Link href="/contact" className="text-[#666666] hover:text-[#FF5A00] transition-colors text-sm lg:text-base">Contact</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-8 lg:py-16">
        <h1 className="text-3xl lg:text-5xl font-bold text-[#151515] mb-6 lg:mb-8">Privacy Policy</h1>
        <p className="text-[#666666] mb-6 lg:mb-8 text-sm lg:text-base">Last Updated: August 2026</p>

        <div className="space-y-6 lg:space-y-8">
          <section>
            <h2 className="text-xl lg:text-2xl font-bold text-[#151515] mb-3 lg:mb-4">1. Introduction</h2>
            <p className="text-[#666666] leading-relaxed text-sm lg:text-base">
              SPOCOR SPORTS ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-bold text-[#151515] mb-3 lg:mb-4">2. Information We Collect</h2>
            <p className="text-[#666666] leading-relaxed mb-3 lg:mb-4 text-sm lg:text-base">We collect information you provide directly to us, including:</p>
            <ul className="list-disc list-inside text-[#666666] space-y-2 text-sm lg:text-base">
              <li>Name and contact information</li>
              <li>Email address and phone number</li>
              <li>Account credentials</li>
              <li>Payment information (processed securely)</li>
              <li>Profile information and preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-bold text-[#151515] mb-3 lg:mb-4">3. How We Use Your Information</h2>
            <p className="text-[#666666] leading-relaxed mb-3 lg:mb-4 text-sm lg:text-base">We use your information to:</p>
            <ul className="list-disc list-inside text-[#666666] space-y-2 text-sm lg:text-base">
              <li>Provide and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices and support messages</li>
              <li>Respond to comments and questions</li>
              <li>Communicate about products, services, and events</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-bold text-[#151515] mb-3 lg:mb-4">4. Information Sharing</h2>
            <p className="text-[#666666] leading-relaxed text-sm lg:text-base">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only with:
            </p>
            <ul className="list-disc list-inside text-[#666666] space-y-2 mt-3 lg:mt-4 text-sm lg:text-base">
              <li>Service providers who assist in operating our platform</li>
              <li>Business partners with your consent</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-bold text-[#151515] mb-3 lg:mb-4">5. Data Security</h2>
            <p className="text-[#666666] leading-relaxed text-sm lg:text-base">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-bold text-[#151515] mb-3 lg:mb-4">6. Cookies</h2>
            <p className="text-[#666666] leading-relaxed text-sm lg:text-base">
              We use cookies to enhance your experience, analyze site traffic, and for security purposes. You can control cookie settings through your browser preferences. Please refer to our Cookie Policy for more details.
            </p>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-bold text-[#151515] mb-3 lg:mb-4">7. Your Rights</h2>
            <p className="text-[#666666] leading-relaxed mb-3 lg:mb-4 text-sm lg:text-base">You have the right to:</p>
            <ul className="list-disc list-inside text-[#666666] space-y-2 text-sm lg:text-base">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-bold text-[#151515] mb-3 lg:mb-4">8. Contact Us</h2>
            <p className="text-[#666666] leading-relaxed text-sm lg:text-base">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-[#FF5A00] mt-2 text-sm lg:text-base">contact@spacorsports.com</p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
