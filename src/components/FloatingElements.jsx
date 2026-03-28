import { useState, useEffect } from 'react';
import { MessageCircle, ChevronUp } from 'lucide-react';

export default function FloatingElements() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const openWhatsApp = () => {
    const phoneNumber = '919974912354'; // Replace with actual number
    const message = 'Hi! I am interested in Aluzen aluminium solutions.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* WhatsApp Chat Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-3 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse cursor-pointer"
        style={{
          backgroundColor: '#1C1C1C',
          color: '#F4C600',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          animation: 'bounce 2s infinite'
        }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </button>

      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
          style={{
            backgroundColor: '#F4C600',
            color: '#1C1C1C',
            boxShadow: '0 4px 12px rgba(244, 198, 0, 0.3)'
          }}
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </>
  );
}