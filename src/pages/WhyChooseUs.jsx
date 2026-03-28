import { useState, useEffect } from 'react';
import { ArrowRight, Wrench, Rocket, Brain, CheckCircle } from 'lucide-react';
import Slider from '../components/Slider';
import slide1 from '../assets/why/slide1.jpg';
import slide2 from '../assets/why/slide2.jpg';
import slide3 from '../assets/why/slide3.jpg';
import slide4 from '../assets/why/slide4.jpg';
import { NavLink } from 'react-router-dom';

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sliderData = [
    {
      id: 1,
      heading: 'Why Choose Aluzen',
      accentWord: 'Aluzen',
      subline: 'What sets us apart in premium aluminium solutions.',
      cta: 'Learn More',
      link: '#strengths',
      bgImage: slide1
    },
    {
      id: 2,
      heading: '25+ Years of Expertise',
      accentWord: 'Expertise',
      subline: 'Decades of experience in aluminium fabrication and installation.',
      cta: 'Our Experience',
      link: '#experience',
      bgImage: slide2
    },
    {
      id: 3,
      heading: 'Premium European Machinery',
      accentWord: 'Premium',
      subline: 'Advanced technology ensuring precision and superior finishes.',
      cta: 'Our Technology',
      link: '#technology',
      bgImage: slide3
    },
    {
      id: 4,
      heading: 'Build With Confidence',
      accentWord: 'Confidence',
      subline: 'Partner with a team that understands aluminium, design, and execution.',
      cta: 'Get in Touch',
      link: '#contact',
      bgImage: slide4
    }
  ];

  const coreStrengths = [
    {
      id: 1,
      icon: Wrench,
      title: '25+ Years of Expertise',
      description: 'With decades of experience in aluminium fabrication and installation, Aluzen brings deep industry knowledge to every project. Our expertise allows us to understand complex architectural requirements and deliver solutions that perform consistently over time.',
      benefits: ['Fewer errors', 'Better planning', 'Reliable execution']
    },
    {
      id: 2,
      icon: Rocket,
      title: 'Premium European Machinery',
      description: 'Our manufacturing process is powered by advanced European machinery designed for high-precision aluminium fabrication. This technology ensures accuracy, consistency, and superior finishes across every product, regardless of scale or complexity.',
      benefits: ['Precise profiles', 'Smooth operation', 'Long-lasting quality']
    },
    {
      id: 3,
      icon: Brain,
      title: 'Design & Innovation',
      description: 'At Aluzen, design is not just about appearance — it is about how a product functions, feels, and integrates into space. We continuously innovate to create aluminium systems that combine clean aesthetics with intelligent engineering and modern usability.',
      benefits: ['Modern look', 'Functional performance', 'Timeless appeal']
    },
    {
      id: 4,
      icon: CheckCircle,
      title: 'Timely Delivery',
      description: 'We understand that timelines are critical in construction and interior projects. Our structured processes, professional coordination, and commitment to planning ensure timely delivery without compromising on quality or finish.',
      benefits: ['Project confidence', 'Smooth execution', 'No unnecessary delays']
    }
  ];

  return (
    <div className="w-full">
      <Slider slides={sliderData} />
      {/* Hero Section */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#1C1C1C' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-12 text-center">
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ color: '#FFFFFF' }}
          >
            Why Choose Aluzen
          </h1>
          <div 
            className={`w-24 h-1 mx-auto mb-8 transition-all duration-1000 delay-200 ${
              isVisible ? 'w-24 opacity-100' : 'w-0 opacity-0'
            }`}
            style={{ backgroundColor: '#F4C600' }}
          />
          <p 
            className={`text-lg md:text-xl mb-8 transition-all duration-1000 delay-300 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ color: '#E0E0E0' }}
          >
            What sets us apart in premium aluminium solutions.
          </p>
          
          <div 
            className={`max-w-4xl mx-auto space-y-6 transition-all duration-1000 delay-500 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#E0E0E0' }}>
              Choosing the right aluminium partner is essential for creating spaces that are not only visually refined, but also durable, reliable, and future-ready.
            </p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#E0E0E0' }}>
              At Aluzen, our approach combines experience, technology, and thoughtful design to deliver solutions that meet the highest standards of modern architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Core Strengths Section */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreStrengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <div
                  key={strength.id}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="text-center p-6 rounded-lg transition-all duration-300 transform hover:-translate-y-2"
                  style={{
                    backgroundColor: hoveredCard === index ? 'rgba(244, 198, 0, 0.05)' : '#FFFFFF',
                    boxShadow: hoveredCard === index 
                      ? '0 12px 24px rgba(0,0,0,0.1)' 
                      : '0 4px 8px rgba(0,0,0,0.05)',
                    border: hoveredCard === index ? '1px solid #F4C600' : '1px solid #E0E0E0'
                  }}
                >
                  {/* Icon */}
                  <div 
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{ 
                      backgroundColor: hoveredCard === index ? '#F4C600' : 'rgba(244, 198, 0, 0.1)'
                    }}
                  >
                    <Icon 
                      size={32} 
                      style={{ 
                        color: hoveredCard === index ? '#1C1C1C' : '#F4C600'
                      }} 
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-4" style={{ color: '#1C1C1C' }}>
                    {strength.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#4A4A4A' }}>
                    {strength.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#F4C600' }}>
                      Why it matters:
                    </p>
                    <ul className="space-y-1">
                      {strength.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-xs flex items-center justify-center" style={{ color: '#4A4A4A' }}>
                          <div className="w-1 h-1 rounded-full mr-2" style={{ backgroundColor: '#F4C600' }} />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Statement Section */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#F2F2F2' }}>
        <div className="max-w-4xl mx-auto px-5 md:px-12 text-center">
          <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#4A4A4A' }}>
            Every Aluzen project reflects our commitment to{' '}
            <span style={{ color: '#F4C600', fontWeight: '600' }}>quality</span>,{' '}
            <span style={{ color: '#F4C600', fontWeight: '600' }}>precision</span>, and{' '}
            <span style={{ color: '#F4C600', fontWeight: '600' }}>professional responsibility</span>.
          </p>
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#4A4A4A' }}>
            From concept to completion, we focus on delivering aluminium solutions that add{' '}
            <span style={{ color: '#F4C600', fontWeight: '600' }}>long-term value</span> to spaces and{' '}
            <span style={{ color: '#F4C600', fontWeight: '600' }}>peace of mind</span> to our clients.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '25+', label: 'Years Expertise' },
              { number: '500+', label: 'Projects Completed' },
              { number: '100%', label: 'Quality Assured' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-4xl font-bold mb-2" style={{ color: '#F4C600' }}>
                  {stat.number}
                </div>
                <div className="text-sm uppercase tracking-wide" style={{ color: '#4A4A4A' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#F4C600' }}>
        <div className="max-w-4xl mx-auto px-5 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1C1C1C' }}>
            Build With Confidence. Build With Aluzen.
          </h2>
          <p className="text-lg md:text-xl mb-10" style={{ color: '#1C1C1C' }}>
            Partner with a team that understands aluminium, design, and execution — all in one place.
          </p>
          <NavLink
          to='/getQuote'
            className="px-10 py-4 font-semibold uppercase transition-all duration-300 inline-flex items-center space-x-2 cursor-pointer"
            style={{
              backgroundColor: '#1C1C1C',
              color: '#F4C600',
              borderRadius: '4px',
              fontSize: '16px',
              letterSpacing: '0.5px',
              border: '2px solid #1C1C1C'
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
            <span>Get in Touch</span>
            <ArrowRight size={20} />
          </NavLink>
        </div>
      </section>
    </div>
  );
}