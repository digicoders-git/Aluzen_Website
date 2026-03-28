import { useState, useEffect } from 'react';
import { ChartNoAxesGantt, Menu, X } from 'lucide-react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Why Aluzen', href: '/why-aluzen' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav
      className={`fixed  top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
      style={{
        backgroundColor: 'rgba(28, 28, 28, 0.95)',
        backdropFilter: 'blur(10px)'
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-23">
          {/* Logo */}
          <div className="shrink-0">
            <Link to="/" className="flex items-center space-x-2 cursor-pointer">
              <img 
                src={logo} 
                alt="Aluzen Logo" 
                className="w-35 h-35 -ml-7 rounded object-contain"
              />
              {/* <span className="text-2xl font-bold tracking-tight hidden sm:block" style={{ color: '#FFFFFF' }}>
                ALUZEN
              </span> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="relative group py-2 uppercase font-semibold transition-colors duration-300 cursor-pointer"
                style={{
                  color: location.pathname === link.href ? '#F4C600' : '#FFFFFF',
                  fontSize: '14px',
                  fontWeight: '600',
                  letterSpacing: '0.5px'
                }}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                    location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                  style={{ backgroundColor: '#F4C600' }}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              to="/getQuote"
              className="px-5 py-2.5 font-semibold uppercase transition-all duration-300 hover:bg-transparent hover:border cursor-pointer"
              style={{
                backgroundColor: '#F4C600',
                color: '#1C1C1C',
                borderRadius: '4px',
                fontSize: '14px',
                letterSpacing: '0.5px',
                border: '1px solid #F4C600'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#F4C600';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#F4C600';
                e.target.style.color = '#1C1C1C';
              }}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors cursor-pointer"
            style={{ color: '#F4C600' }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <ChartNoAxesGantt size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ backgroundColor: '#1C1C1C' }}
      >
        <div className="px-5 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 px-4 uppercase font-semibold transition-all duration-300 rounded cursor-pointer"
              style={{
                color: location.pathname === link.href ? '#F4C600' : '#FFFFFF',
                fontSize: '15px',
                fontWeight: '600',
                letterSpacing: '0.5px',
                backgroundColor: location.pathname === link.href ? 'rgba(244, 198, 0, 0.1)' : 'transparent',
                borderLeft: location.pathname === link.href ? '3px solid #F4C600' : '3px solid transparent'
              }}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Mobile CTA */}
          <Link to="/getQuote">
            <div
              className="block w-full text-center py-3 px-5 font-semibold uppercase rounded mt-6 cursor-pointer"
              style={{
                backgroundColor: '#F4C600',
                color: '#1C1C1C',
                fontSize: '14px',
                letterSpacing: '0.5px'
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Quote
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}