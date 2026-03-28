import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export default function Slider({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, slides.length]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 600);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsTransitioning(false), 600);
    }
  };

  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 600);
    }
  };

  return (
    <div 
      className="relative w-full overflow-hidden mt-20 h-84 sm:h-80 md:h-96 lg:h-[400px]"
    >
      {/* Slides Container */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-600 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              transitionDuration: '600ms'
            }}
          >
            {/* Overlay */}
            <div 
              className="absolute inset-0"
              style={{ backgroundColor: 'rgba(28, 28, 28, 0.55)' }}
            />

            {/* Geometric Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id={`grid-${slide.id}`} width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#F4C600" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#grid-${slide.id})`} />
              </svg>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-16 sm:px-20 md:px-12 lg:px-20 w-full">
                <div 
                  className={`max-w-3xl transition-all duration-1000 ${
                    index === currentSlide 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '200ms' }}
                >
                  {/* Heading */}
                  <h2 
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight"
                    style={{ color: '#FFFFFF' }}
                  >
                    {slide.heading.split(slide.accentWord).map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span style={{ color: '#F4C600' }}>{slide.accentWord}</span>
                        )}
                      </span>
                    ))}
                  </h2>

                  {/* Accent Line */}
                  <div 
                    className="w-16 h-1 mb-4"
                    style={{ backgroundColor: '#F4C600' }}
                  />

                  {/* Subline */}
                  <p 
                    className="text-sm sm:text-base md:text-lg mb-6 max-w-2xl leading-relaxed"
                    style={{ color: '#E0E0E0' }}
                  >
                    {slide.subline}
                  </p>

                  {/* CTA Button */}
                  {/* <a
                    href={slide.link}
                    className="group inline-flex items-center space-x-2 px-7 py-3.5 font-semibold uppercase transition-all duration-300"
                    style={{
                      backgroundColor: '#F4C600',
                      color: '#1C1C1C',
                      borderRadius: '4px',
                      fontSize: '15px',
                      letterSpacing: '0.5px',
                      border: '1px solid #F4C600',
                      boxShadow: '0 4px 14px rgba(244, 198, 0, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#F4C600';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#F4C600';
                      e.currentTarget.style.color = '#1C1C1C';
                    }}
                  >
                    <span>{slide.cta}</span>
                    <ArrowRight 
                      size={18} 
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 cursor-pointer"
        style={{
          backgroundColor: 'rgba(244, 198, 0, 0.9)',
          color: '#1C1C1C'
        }}
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 cursor-pointer"
        style={{
          backgroundColor: 'rgba(244, 198, 0, 0.9)',
          color: '#1C1C1C'
        }}
        aria-label="Next slide"
      >
        <ChevronRight size={20} className="sm:w-6 sm:h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className="transition-all duration-300 rounded-full disabled:opacity-50 cursor-pointer"
            style={{
              width: currentSlide === index ? '32px' : '12px',
              height: '12px',
              backgroundColor: currentSlide === index ? '#F4C600' : 'rgba(255, 255, 255, 0.4)'
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}