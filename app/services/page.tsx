import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: '3D Sports Analytics',
      description: 'Advanced 3D visualization and analysis tools for athletes and coaches to improve performance.',
      icon: '📊'
    },
    {
      title: 'Virtual Training',
      description: 'Immersive virtual reality training sessions that simulate real-game scenarios.',
      icon: '🥽'
    },
    {
      title: 'Performance Tracking',
      description: 'Real-time performance metrics and AI-powered insights for continuous improvement.',
      icon: '📈'
    },
    {
      title: 'Sports Equipment Design',
      description: 'Custom 3D modeling and prototyping for sports equipment and gear.',
      icon: '🎯'
    },
    {
      title: 'Fan Engagement',
      description: 'Interactive 3D experiences for fans to engage with their favorite sports and athletes.',
      icon: '🎮'
    },
    {
      title: 'Data Integration',
      description: 'Seamless integration with existing sports data systems and platforms.',
      icon: '🔗'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505]">
      <nav className="flex justify-between items-center p-8 max-w-7xl mx-auto">
        <Link href="/" className="text-3xl font-bold text-[#FFFFFF]">SPOCOR SPORTS</Link>
        <div className="flex gap-6">
          <Link href="/" className="text-[#E7E7E7] hover:text-[#FF5A00] transition-colors">Home</Link>
          <Link href="/about" className="text-[#E7E7E7] hover:text-[#FF5A00] transition-colors">About</Link>
          <Link href="/services" className="text-[#FF5A00]">Services</Link>
          <Link href="/contact" className="text-[#E7E7E7] hover:text-[#FF5A00] transition-colors">Contact</Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-8 py-16">
        <h1 className="text-5xl font-bold text-[#FFFFFF] mb-4">Our Services</h1>
        <p className="text-xl text-[#E7E7E7] mb-12 max-w-3xl">
          Cutting-edge sports technology solutions designed to elevate performance and engagement
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-[#121212] p-8 rounded-lg hover:bg-[#0B0B0B] transition-colors group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#FFFFFF] mb-3">{service.title}</h3>
              <p className="text-[#999999] leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#0B0B0B] p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-[#FFFFFF] mb-6">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-[#FF5A00] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-[#FFFFFF] font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-[#FFFFFF] font-semibold mb-2">Industry Leading Technology</h3>
                <p className="text-[#999999]">We use the latest 3D rendering and AI technologies to deliver superior results.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-[#FF5A00] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-[#FFFFFF] font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-[#FFFFFF] font-semibold mb-2">Expert Team</h3>
                <p className="text-[#999999]">Our team consists of former athletes, sports scientists, and tech experts.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-[#FF5A00] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-[#FFFFFF] font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-[#FFFFFF] font-semibold mb-2">Custom Solutions</h3>
                <p className="text-[#999999]">Tailored solutions designed to meet your specific needs and goals.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-[#FF5A00] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-[#FFFFFF] font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-[#FFFFFF] font-semibold mb-2">24/7 Support</h3>
                <p className="text-[#999999]">Round-the-clock support to ensure you never face any downtime.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-block bg-[#FF5A00] text-[#FFFFFF] px-8 py-4 rounded-full font-semibold hover:bg-[#FF6A00] transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
}
