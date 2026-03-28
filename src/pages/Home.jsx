import { useState, useEffect } from 'react';
import { ArrowRight, Shield, Cog, Sparkles, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Slider from '../components/Slider';
import logo from '../assets/logoo.jpeg';
import about from '../assets/home/about.jpg'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sliderData = [
    {
      id: 1,
      heading: 'Precision in Every Frame',
      accentWord: 'Precision',
      subline: 'Crafted aluminium systems for modern architecture.',
      cta: 'Explore Products',
      link: '/products',
      bgImage: '/home2.png'
    },
    {
      id: 2,
      heading: 'Designed for Strength. Built for Elegance.',
      accentWord: 'Strength',
      subline: 'Sliding systems and casement solutions that deliver smooth performance and timeless design.',
      cta: 'View Our Products',
      link: '/products',
      bgImage: '/home3.png'
    },
    {
      id: 3,
      heading: 'Engineered with Precision',
      accentWord: 'Precision',
      subline: 'Manufactured using advanced machinery to ensure accuracy, durability, and flawless finishes.',
      cta: 'Why Choose Aluzen',
      link: '/why-aluzen',
      bgImage: '/home4.png'
    },
    {
      id: 4,
      heading: 'Spaces That Reflect Excellence',
      accentWord: 'Excellence',
      subline: 'From residences to commercial projects, Aluzen systems elevate every space.',
      cta: 'View Our Projects',
      link: '/projects',
      bgImage: '/home5.png'
    }
  ];

  const whyPoints = [
    {
      icon: Shield,
      title: '25+ Years of Expertise',
      description: 'Decades of experience delivering reliable and high-quality aluminium solutions.'
    },
    {
      icon: Cog,
      title: 'Premium European Machinery',
      description: 'State-of-the-art machinery ensuring precision, consistency, and superior finishes.'
    },
    {
      icon: Sparkles,
      title: 'Design & Innovation',
      description: 'A perfect balance of modern aesthetics and engineering excellence.'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Commitment to deadlines without compromising quality.'
    }
  ];

  return (
    <div className="w-full">
      <Slider slides={sliderData} />
      
      {/* 1️⃣ HERO SECTION */}
      <section 
        className="relative flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: '#1C1C1C' }}
      >
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#F4C600" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-7">
              <h1 
                className={`transition-all duration-1000 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  color: '#FFFFFF',
                  fontSize: 'clamp(34px, 5vw, 64px)',
                  fontWeight: '700',
                  lineHeight: '1.15',
                  letterSpacing: '-0.5px'
                }}
              >
                Precision in Every Frame.
                <br />
                <span style={{ color: '#F4C600' }}>Style in Every Space.</span>
              </h1>

              <p 
                className={`transition-all duration-1000 delay-200 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  color: '#E0E0E0',
                  fontSize: 'clamp(16px, 2vw, 20px)',
                  fontWeight: '400',
                  lineHeight: '1.6',
                  maxWidth: '540px'
                }}
              >
                Premium aluminium systems crafted for modern architecture.
              </p>

              <div 
                className={`pt-2 transition-all duration-1000 delay-400 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <Link to="/products">
                  <button
                    className="group px-7 py-3.5 font-semibold uppercase transition-all duration-300 flex items-center space-x-2 cursor-pointer"
                    style={{
                      backgroundColor: '#F4C600',
                      color: '#1C1C1C',
                      borderRadius: '4px',
                      fontSize: '15px',
                      letterSpacing: '0.5px',
                      border: '1px solid #F4C600',
                      boxShadow: '0 4px 14px rgba(244, 198, 0, 0.25)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#1C1C1C';
                      e.currentTarget.style.color = '#F4C600';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#F4C600';
                      e.currentTarget.style.color = '#1C1C1C';
                    }}
                  >
                    <span>Explore Products</span>
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1"/>
                  </button>
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative w-full h-96">
                <div 
                  className="absolute inset-0 border-2 transform rotate-6 transition-transform duration-700 hover:rotate-3 overflow-hidden"
                  style={{ 
                    borderColor: '#F4C600',
                    backgroundImage: 'url(/HOME.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: 'rgba(28, 28, 28, 0.8)',
                    backgroundBlendMode: 'overlay'
                  }}
                />
                <div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-4 flex items-center justify-center"
                  style={{ borderColor: '#F4C600' }}
                >
                  <img 
                    src={logo} 
                    alt="Aluzen Logo" 
                    className="w-40 h-40 rounded object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2️⃣ ABOUT PREVIEW SECTION */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text Content */}
            <div>
              <h2 
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{ color: '#1C1C1C' }}
              >
                About Aluzen
              </h2>
              <div className="w-24 h-1 mb-6" style={{ backgroundColor: '#F4C600' }} />
              
              <div className="space-y-6">
                <p className="text-lg md:text-xl leading-relaxed font-medium" style={{ color: '#1C1C1C' }}>
                  ALUZEN is built on a legacy of hard work, dedication, and craftsmanship that began decades ago.
                </p>
                <div className="space-y-4 text-base md:text-lg leading-relaxed" style={{ color: '#1C1C1C' }}>
                  <p>
                    Our journey started with our founder, <strong>Mr. Babulal Udaram Suthar</strong>, who began working in the furniture industry at the young age of just 14. Starting from daily wage work (hazari), he learned the craft through pure hard work and determination. 
                  </p>
                  <p>
                    In 1991, he moved to Surat and took a small step towards his dream by starting his own furniture shop under the name <strong>Ishwar Furniture</strong>. With honesty, quality workmanship, and strong customer relationships, he gradually grew his business and established himself as a trusted name in the field.
                  </p>
                  <p>
                    In 2018, we lost him, but his values, vision, and work ethic continue to guide us. Today, his legacy is proudly carried forward by his sons — Dungarram Suthar, Ishwarlal Suthar, and Rameshwar Suthar.
                  </p>
                  <p>
                    With a vision to evolve with modern architecture and market needs, the next generation expanded beyond furniture and introduced advanced aluminium solutions. This led to the launch of our brand <strong>ALUZEN</strong>.
                  </p>
                </div>

                <div className="py-4 border-l-4 border-yellow-500 pl-6 space-y-2">
                  <h4 className="font-bold uppercase tracking-wider" style={{ color: '#F4C600' }}>Under ALUZEN, we now specialize in:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm md:text-base font-medium" style={{ color: '#1C1C1C' }}>
                    <li>• Aluminium profile shutters</li>
                    <li>• Sliding & casement windows</li>
                    <li>• Bathroom shower cubicles</li>
                    <li>• Slim partitions</li>
                    <li>• Synchro & telescopic sliding systems</li>
                    <li>• Mirrors & customized aluminium work</li>
                  </ul>
                </div>

                <div className="space-y-4 text-base md:text-lg leading-relaxed" style={{ color: '#1C1C1C' }}>
                  <p>
                    From a small furniture shop to a modern factory setup and a dedicated showroom, our journey reflects continuous growth and commitment to excellence. Today, ALUZEN stands as a symbol of quality, innovation, and trust, offering premium aluminium solutions where clients can experience products firsthand through our display showroom.
                  </p>
                </div>

                <div className="pt-6">
                  <Link to="/about">
                    <button
                      className="px-8 py-3 font-semibold uppercase transition-all duration-300 inline-flex items-center space-x-2 cursor-pointer"
                      style={{
                        backgroundColor: 'transparent',
                        color: '#1C1C1C',
                        border: '2px solid #1C1C1C',
                        borderRadius: '4px',
                        fontSize: '14px',
                        letterSpacing: '0.5px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#1C1C1C';
                        e.currentTarget.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#1C1C1C';
                      }}
                    >
                      <span>Know More About Us</span>
                      <ChevronRight size={18} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Images Stack */}
            <div className="space-y-6">
              {/* Image 1 */}
              <div 
                className="relative rounded-lg overflow-hidden shadow-xl"
                style={{ height: '350px', backgroundColor: '#F2F2F2' }}
              >
                <img 
                  src="/about (2).jpg"
                  alt="Founder Legacy" 
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4"
                  style={{ borderColor: '#F4C600' }}
                />
              </div>

              {/* Image 2 */}
              <div 
                className="relative rounded-lg overflow-hidden shadow-xl"
                style={{ height: '350px', backgroundColor: '#F2F2F2' }}
              >
                <img 
                  src="/ab3.jpg"
                  alt="Modern Solutions" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 3 */}
              <div 
                className="relative rounded-lg overflow-hidden shadow-xl"
                style={{ height: '350px', backgroundColor: '#F2F2F2' }}
              >
                <img 
                  src="/ab4.jpg"
                  alt="Factory Excellence" 
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4"
                  style={{ borderColor: '#F4C600' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ PRODUCT HIGHLIGHTS (PRODUCT CENTER) SECTION */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#111111' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-10 tracking-wider text-white uppercase">
              Product Center
            </h2>
            
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16 overflow-x-auto pb-4 no-scrollbar">
              {['Invisible ...', 'Sliding & ...', 'Modular ...', 'Shower C...', 'Sliding W...', 'Full Glas...', 'Edge Han...', 'Kitchen Se...'].map((cat, i) => (
                <button 
                  key={i} 
                  className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 whitespace-nowrap ${i === 1 ? 'text-[#F4C600]' : 'text-gray-500 hover:text-white'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mb-16">
            {[
              { id: 'Aluminium profile shutters', img: '/products/shutters.png' },
              { id: 'Sliding & casement windows', img: '/products/windows.png' },
              { id: 'Bathroom shower cubicles', img: '/products/shower.png' },
              { id: 'Slim partitions', img: '/products/partition.png' },
              { id: 'Synchro & telescopic sliding systems', img: '/products/telescopic.png' },
              { id: 'Mirrors & customized aluminium work', img: '/products/mirrors.png' }
            ].map((product, index) => (
              <div
                key={index}
                className="group cursor-pointer"
              >
                <div className="aspect-video relative rounded-sm overflow-hidden border border-gray-800 bg-[#1A1A1A] transition-all duration-500 hover:border-[#F4C600]/50 shadow-2xl">
                  <img 
                    src={product.img}
                    alt={product.id} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                  />
                  {/* Subtle Glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-[12px] md:text-sm font-bold tracking-[0.1em] text-gray-300 group-hover:text-[#F4C600] uppercase transition-colors">
                    {product.id}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* More Button */}
          <div className="text-center mt-12">
            <Link to="/products">
              <button
                className="px-16 py-3 text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] transition-all duration-300 border border-gray-700 text-gray-400 hover:border-white hover:text-white cursor-pointer"
              >
                More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4️⃣ WHY CHOOSE ALUZEN */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#1C1C1C' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
              Why Aluzen
            </h2>
            <p className="text-lg md:text-xl" style={{ color: '#FFFFFF' }}>
              What sets us apart in aluminium innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: 'rgba(244, 198, 0, 0.05)' }}
                >
                  <div 
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#F4C600' }}
                  >
                    <Icon size={32} style={{ color: '#1C1C1C' }} />
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#F4C600' }}>
                    {point.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#FFFFFF' }}>
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5️⃣ PROJECT SHOWCASE */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1C1C1C' }}>
            Projects That Define Quality
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12" style={{ color: '#1C1C1C' }}>
            From residential spaces to commercial developments, our aluminium systems have enhanced countless projects with style, strength, and precision.
          </p>

          <Link to="/projects">
            <button
              className="px-8 py-3.5 font-semibold uppercase transition-all duration-300 inline-flex items-center space-x-2 cursor-pointer"
              style={{
                backgroundColor: '#1C1C1C',
                color: '#FFFFFF',
                borderRadius: '4px',
                fontSize: '15px',
                letterSpacing: '0.5px',
                border: '1px solid #1C1C1C'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#1C1C1C';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1C1C1C';
                e.currentTarget.style.color = '#FFFFFF';
              }}
            >
              <span>View Our Projects</span>
              <ArrowRight size={18} />
            </button>
          </Link>
        </div>
      </section>

      {/* 6️⃣ CALL TO ACTION SECTION */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#F4C600' }}>
        <div className="max-w-4xl mx-auto px-5 md:px-12 text-center">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: '#1C1C1C' }}
          >
            Let's Build Something Together
          </h2>
          <p 
            className="text-lg md:text-xl mb-10"
            style={{ color: '#1C1C1C' }}
          >
            Partner with Aluzen to bring premium aluminium solutions to your next project.
          </p>

          <Link to="/getQuote">
            <button
              className="px-10 py-4 font-semibold uppercase transition-all duration-300 inline-flex items-center space-x-2 cursor-pointer"
              style={{
                backgroundColor: '#1C1C1C',
                color: '#F4C600',
                borderRadius: '4px',
                fontSize: '16px',
                letterSpacing: '0.5px',
                border: '2px solid #1C1C1C',
                boxShadow: '0 4px 14px rgba(0,0,0,0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#1C1C1C';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1C1C1C';
                e.currentTarget.style.color = '#F4C600';
              }}
            >
              <span>Get a Quote</span>
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}