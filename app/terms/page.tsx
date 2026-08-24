import Link from 'next/link';
import Footer from '@/components/Footer';

export default function TermsOfService() {
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
        <h1 className="text-3xl lg:text-5xl font-bold text-[#151515] mb-6 lg:mb-8">Terms of Service</h1>
        <p className="text-[#666666] mb-6 lg:mb-8 text-sm lg:text-base">Last Updated: August 2026</p>

        <div className="space-y-6 lg:space-y-8">
          <section>
            <h2 className="text-xl lg:text-2xl font-bold text-[#151515] mb-3 lg:mb-4">1. Acceptance of Terms</h2>
            <p className="text-[#666666] leading-relaxed text-sm lg:text-base">
              By accessing or using SPOCOR SPORTS services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-bold text-[#151515] mb-3 lg:mb-4">2. Description of Service</h2>
            <p className="text-[#666666] leading-relaxed text-sm lg:text-base">
              SPOCOR SPORTS provides sports league management, athlete development programs, and related services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-bold text-[#151515] mb-3 lg:mb-4">3. User Accounts</h2>
            <p className="text-[#666666] leading-relaxed mb-3 lg:mb-4 text-sm lg:text-base">You are responsible for:</p>
            <ul className="list-disc list-inside text-[#666666] space-y-2 text-sm lg:text-base">
              <li>Maintaining the confidentiality of your account</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us of unauthorized access</li>
              <li>Providing accurate and complete information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-bold text-[#151515] mb-3 lg:mb-4">4. Acceptable Use</h2>
            <p className="text-[#666666] leading-relaxed mb-3 lg:mb-4 text-sm lg:text-base">You agree not to:</p>
            <ul className="list-disc list-inside text-[#666666] space-y-2 text-sm lg:text-base">
              <li>Use the service for illegal purposes</li>
              <li>Interfere with or disrupt the service</li>
              <li>Transmit viruses or malicious code</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-bold text-[#151515] mb-3 lg:mb-4">5. Intellectual Property</h2>
            <p className="text-[#666666] leading-relaxed text-sm lg:text-base">
              All content, trademarks, and materials on SPOCOR SPORTS platforms are owned by us or our licensors. You may not use, reproduce, or distribute any content without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-bold text-[#151515] mb-3 lg:mb-4">6. Privacy</h2>
            <p className="text-[#666666] leading-relaxed text-sm lg:text-base">
              Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-bold text-[#151515] mb-3 lg:mb-4">7. Limitation of Liability</h2>
            <p className="text-[#666666] leading-relaxed text-sm lg:text-base">
              SPOCOR SPORTS shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability shall not exceed the amount you paid for the service, if any.
            </p>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-bold text-[#151515] mb-3 lg:mb-4">8. Termination</h2>
            <p className="text-[#666666] leading-relaxed text-sm lg:text-base">
              We reserve the right to terminate or suspend your account at any time for violation of these Terms of Service or for any other reason at our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-bold text-[#151515] mb-3 lg:mb-4">9. Governing Law</h2>
            <p className="text-[#666666] leading-relaxed text-sm lg:text-base">
              These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which SPOCOR SPORTS operates.
            </p>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-bold text-[#151515] mb-3 lg:mb-4">10. Contact Us</h2>
            <p className="text-[#666666] leading-relaxed text-sm lg:text-base">
              If you have questions about these Terms of Service, please contact us at:
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
