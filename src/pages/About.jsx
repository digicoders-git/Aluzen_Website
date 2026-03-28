import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Award, Users, Target } from 'lucide-react';
import Slider from '../components/Slider';
import slide1 from '../assets/about/slide1.jpg';
import slide2 from '../assets/about/slide2.jpg';
import slide3 from '../assets/about/slide3.jpg';
import slide4 from '../assets/about/slide4.jpg';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const sliderData = [
    {
      id: 1,
      heading: 'About Aluzen',
      accentWord: 'Aluzen',
      subline: 'Precision-crafted aluminium solutions for modern architecture.',
      cta: 'Learn More',
      link: '#about',
      bgImage: slide1
    },
    {
      id: 2,
      heading: 'Our Design Philosophy',
      accentWord: 'Design',
      subline: 'We believe great design lies in simplicity and precision.',
      cta: 'View Products',
      link: '#products',
      bgImage: slide2
    },
    {
      id: 3,
      heading: 'Built for Today. Designed for Tomorrow.',
      accentWord: 'Tomorrow',
      subline: 'Partner with Aluzen to bring precision-crafted aluminium solutions to your next project.',
      cta: 'Explore Our Products',
      link: '#products',
      bgImage: slide3
    },
    {
      id: 4,
      heading: 'Shaping Excellence in Every Frame',
      accentWord: 'Excellence',
      subline: 'To become a trusted leader in premium aluminium systems.',
      cta: 'Contact Us',
      link: '#contact',
      bgImage: slide4
    }
  ];

  return (
    <div className="w-full">
      <Slider slides={sliderData} />
      
      {/* About Aluzen Section */}
      

      {/* About Aluzen Section */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#1C1C1C' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
              About Aluzen
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#F4C600' }} />
            <p className="text-lg md:text-xl mb-8" style={{ color: '#E0E0E0' }}>
              Precision-crafted aluminium solutions for modern architecture.
            </p>
            <p className="text-base md:text-lg max-w-4xl mx-auto leading-relaxed" style={{ color: '#E0E0E0' }}>
              At Aluzen, we are dedicated to designing and manufacturing premium aluminium windows, doors, and architectural systems that redefine durability, elegance, and performance. Our solutions are built to complement contemporary spaces while meeting the highest standards of quality and precision.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
                Who We Are
              </h2>
              <div className="w-24 h-1 mb-6" style={{ backgroundColor: '#F4C600' }} />
              <p className="text-base md:text-lg mb-4 leading-relaxed" style={{ color: '#4A4A4A' }}>
                Aluzen is a premium aluminium solutions brand built on precision engineering, thoughtful design, and long-term performance.
              </p>
              <p className="text-base md:text-lg mb-4 leading-relaxed" style={{ color: '#4A4A4A' }}>
                With a strong understanding of modern architectural needs, we specialize in aluminium windows, doors, and systems that enhance both residential and commercial spaces.
              </p>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: '#4A4A4A' }}>
                Our approach combines technical expertise with a design-first mindset, allowing us to deliver products that are not only functional, but also visually refined and reliable over time.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={slide1} 
                alt="Aluzen Team" 
                className="w-full h-full object-cover"
                style={{ minHeight: '400px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#F2F2F2' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
              Our Journey
            </h2>
            <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: '#F4C600' }} />
            <p className="text-base md:text-lg max-w-4xl mx-auto leading-relaxed mb-4" style={{ color: '#1C1C1C' }}>
              Our journey is shaped by a clear vision — to raise the standards of aluminium systems in modern construction.
            </p>
            <p className="text-base md:text-lg max-w-4xl mx-auto leading-relaxed mb-4" style={{ color: '#1C1C1C' }}>
              From residential homes to large-scale commercial projects, Aluzen has consistently delivered solutions that reflect quality, precision, and attention to detail.
            </p>
            <p className="text-base md:text-lg max-w-4xl mx-auto leading-relaxed mb-12" style={{ color: '#1C1C1C' }}>
              Each project strengthens our experience and reinforces our commitment to excellence.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <p className="text-5xl md:text-6xl font-bold mb-2" style={{ color: '#F4C600' }}>25+</p>
                <p className="text-lg font-semibold" style={{ color: '#1C1C1C' }}>Years Expertise</p>
              </div>
              <div className="text-center">
                <p className="text-5xl md:text-6xl font-bold mb-2" style={{ color: '#F4C600' }}>500+</p>
                <p className="text-lg font-semibold" style={{ color: '#1C1C1C' }}>Projects Successfully Delivered</p>
              </div>
              <div className="text-center">
                <p className="text-5xl md:text-6xl font-bold mb-2" style={{ color: '#F4C600' }}>100%</p>
                <p className="text-lg font-semibold" style={{ color: '#1C1C1C' }}>Commitment to Quality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing & Quality Section */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#1C1C1C' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
                Manufacturing & Quality
              </h2>
              <div className="w-24 h-1 mb-6" style={{ backgroundColor: '#F4C600' }} />
              <p className="text-base md:text-lg mb-4 leading-relaxed" style={{ color: '#FFFFFF' }}>
                At Aluzen, quality is built into every stage of our manufacturing process.
              </p>
              <p className="text-base md:text-lg mb-4 leading-relaxed" style={{ color: '#FFFFFF' }}>
                We utilize advanced machinery, premium-grade materials, and strict quality control measures to ensure consistency, accuracy, and superior finish in every product.
              </p>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: '#FFFFFF' }}>
                Each aluminium system undergoes careful inspection to meet our standards of durability, performance, and aesthetics — because we believe excellence is never accidental.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={slide2} 
                alt="Manufacturing Quality" 
                className="w-full h-full object-cover"
                style={{ minHeight: '400px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#F4C600' }}>
        <div className="max-w-4xl mx-auto px-5 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1C1C1C' }}>
            Built for Today. Designed for Tomorrow.
          </h2>
          <p className="text-lg md:text-xl mb-10" style={{ color: '#1C1C1C' }}>
            Partner with Aluzen to bring precision-crafted aluminium solutions to your next project.
          </p>
          <button
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
            <span>Explore Our Products</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}