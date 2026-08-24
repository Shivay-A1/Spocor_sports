import Link from 'next/link';
import Footer from '@/components/Footer';

export default function CookiePolicy() {
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
        <h1 className="text-3xl lg:text-5xl font-bold text-[#151515] mb-6 lg:mb-8">Cookie Policy</h1>
        <p className="text-[#666666] mb-6 lg:mb-8 text-sm lg:text-base">Last Updated: August 2026</p>

        <div className="space-y-6 lg:space-y-8">
          <section>
            <h2 className="text-xl lg:text-2xl font-bold text-[#151515] mb-3 lg:mb-4">1. What Are Cookies</h2>
            <p className="text-[#666666] leading-relaxed text-sm lg:text-base">
              Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-bold text-[#151515] mb-3 lg:mb-4">2. How We Use Cookies</h2>
            <p className="text-[#666666] leading-relaxed mb-3 lg:mb-4 text-sm lg:text-base">We use cookies for the following purposes:</p>
            <ul className="list-disc list-inside text-[#666666] space-y-2 text-sm lg:text-base">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Performance Cookies:</strong> Help us understand how visitors use our site</li>
              <li><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Marketing Cookies:</strong> Track your browsing to provide relevant advertisements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-bold text-[#151515] mb-3 lg:mb-4">3. Types of Cookies We Use</h2>
            <div className="space-y-3 lg:space-y-4">
              <div>
                <h3 className="font-semibold text-[#151515] text-sm lg:text-base">Session Cookies</h3>
                <p className="text-[#666666] text-sm lg:text-base">Temporary cookies that expire when you close your browser.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#151515] text-sm lg:text-base">Persistent Cookies</h3>
                <p className="text-[#666666] text-sm lg:text-base">Cookies that remain on your device for a set period or until deleted.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#151515] text-sm lg:text-base">Third-Party Cookies</h3>
                <p className="text-[#666666] text-sm lg:text-base">Cookies set by external services we use on our website.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-bold text-[#151515] mb-3 lg:mb-4">4. Managing Cookies</h2>
            <p className="text-[#666666] leading-relaxed mb-3 lg:mb-4 text-sm lg:text-base">
              You can control and manage cookies through your browser settings. Most browsers allow you to:
            </p>
            <ul className="list-disc list-inside text-[#666666] space-y-2 text-sm lg:text-base">
              <li>View what cookies are stored and delete them individually</li>
              <li>Block cookies from specific websites</li>
              <li>Block all cookies from being set</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>
            <p className="text-[#666666] leading-relaxed mt-3 lg:mt-4 text-sm lg:text-base">
              Please note that blocking essential cookies may affect the functionality of our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-bold text-[#151515] mb-3 lg:mb-4">5. Third-Party Services</h2>
            <p className="text-[#666666] leading-relaxed mb-3 lg:mb-4 text-sm lg:text-base">
              We may use third-party services that also use cookies, including:
            </p>
            <ul className="list-disc list-inside text-[#666666] space-y-2 text-sm lg:text-base">
              <li>Analytics services (e.g., Google Analytics)</li>
              <li>Social media platforms</li>
              <li>Advertising networks</li>
            </ul>
            <p className="text-[#666666] leading-relaxed mt-3 lg:mt-4 text-sm lg:text-base">
              These third parties have their own privacy policies and cookie policies. We encourage you to review their policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-bold text-[#151515] mb-3 lg:mb-4">6. Updates to This Policy</h2>
            <p className="text-[#666666] leading-relaxed text-sm lg:text-base">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-bold text-[#151515] mb-3 lg:mb-4">7. Contact Us</h2>
            <p className="text-[#666666] leading-relaxed text-sm lg:text-base">
              If you have questions about our use of cookies, please contact us at:
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
