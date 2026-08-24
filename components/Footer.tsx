import Link from 'next/link';

export default function Footer() {
  const footerLinks = {
    company: ['About', 'Leagues', 'Athletes', 'Partners', 'Media', 'Contact'],
    legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#121212]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-xl lg:text-2xl font-bold text-[#FFFFFF] mb-3 lg:mb-4">Spocor sports</h3>
            <p className="text-[#999999] text-xs lg:text-sm leading-relaxed mb-4 lg:mb-6">
              Building the future of sports through world-class leagues and opportunities for athletes worldwide.
            </p>
            <div className="flex gap-3 lg:gap-4">
              <a href="#" className="text-[#999999] hover:text-[#FF5A00] transition-colors text-xs lg:text-sm">Facebook</a>
              <a href="#" className="text-[#999999] hover:text-[#FF5A00] transition-colors text-xs lg:text-sm">Twitter</a>
              <a href="#" className="text-[#999999] hover:text-[#FF5A00] transition-colors text-xs lg:text-sm">Instagram</a>
              <a href="#" className="text-[#999999] hover:text-[#FF5A00] transition-colors text-xs lg:text-sm">LinkedIn</a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-[#FFFFFF] font-semibold mb-3 lg:mb-4 text-sm lg:text-base">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <Link
                    href={link === 'About' ? '/about' : `#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-[#999999] hover:text-[#FF5A00] transition-colors text-xs lg:text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[#FFFFFF] font-semibold mb-3 lg:mb-4 text-sm lg:text-base">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-[#999999] hover:text-[#FF5A00] transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[#999999] hover:text-[#FF5A00] transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-[#999999] hover:text-[#FF5A00] transition-colors text-sm">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#FFFFFF] font-semibold mb-3 lg:mb-4 text-sm lg:text-base">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:Spacorsports@gmail.com" className="text-[#999999] hover:text-[#FF5A00] transition-colors text-xs lg:text-sm">
                  Spacorsports@gmail.com
                </a>
              </li>
              <li className="text-[#999999] text-xs lg:text-sm leading-relaxed">
                A-901, Ansal Tanushree,<br />
                NH-24, Ghaziabad - 201002,<br />
                Uttar Pradesh, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#121212] mt-8 lg:mt-12 pt-6 lg:pt-8 text-center">
          <p className="text-[#999999] text-xs lg:text-sm">
            © Spocor sports. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
