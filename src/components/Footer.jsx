import { useState } from 'react';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Why Aluzen', href: '/why-aluzen' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <footer style={{ backgroundColor: '#1C1C1C' }}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-5 md:px-12 lg:px-16 py-16 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          
          {/* Column 1 - Brand Info */}
          <div className="space-y-5 -mt-20 -mb-5 md:-mb-3 md:-mt-15">
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-0">
              <div className="shrink-0">
            <Link to="/" className="flex items-center space-x-2 cursor-pointer">
              <img 
                src={logo} 
                alt="Aluzen Logo" 
                className="w-45 h-45 rounded object-contain -ml-10 -mb-10"
              />
              {/* <span className="text-2xl font-bold tracking-tight hidden sm:block" style={{ color: '#FFFFFF' }}>
                ALUZEN
              </span> */}
            </Link>
          </div>
            </div>

            {/* Brand Description */}
            <p 
              className="leading-relaxed"
              style={{
                color: '#B5B5B5',
                fontSize: '14px',
                lineHeight: '1.7'
              }}
            >
              Aluzen delivers premium aluminium windows, doors, and architectural systems crafted for modern architecture, precision engineering, and lasting performance.
            </p>

            {/* Tagline */}
            <p 
              className="italic font-medium pt-2"
              style={{
                color: '#F4C600',
                fontSize: '15px'
              }}
            >
              Elegance in Every Frame
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 
              className="text-lg font-bold mb-6 uppercase tracking-wide"
              style={{ color: '#FFFFFF', letterSpacing: '1px' }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    onMouseEnter={() => setHoveredLink(`quick-${index}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="group flex items-center space-x-2 transition-all duration-300"
                    style={{
                      color: hoveredLink === `quick-${index}` ? '#F4C600' : '#B5B5B5',
                      fontSize: '14px',
                      textDecoration: 'none'
                    }}
                  >
                    <ChevronRight
                      size={16}
                      className={`transition-transform duration-300 ${
                        hoveredLink === `quick-${index}` ? 'translate-x-1' : ''
                      }`}
                      style={{
                        opacity: hoveredLink === `quick-${index}` ? 1 : 0
                      }}
                    />
                    <span className="relative">
                      {link.name}
                      <span
                        className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                        style={{
                          backgroundColor: '#F4C600',
                          width: hoveredLink === `quick-${index}` ? '100%' : '0%'
                        }}
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h3 
              className="text-lg font-bold mb-6 uppercase tracking-wide"
              style={{ color: '#FFFFFF', letterSpacing: '1px' }}
            >
              Get in Touch
            </h3>
            <div className="space-y-4">
              {/* Location */}
              <div className="flex items-start space-x-3">
                <MapPin 
                  size={20} 
                  className="mt-1 flex-shrink-0"
                  style={{ color: '#F4C600' }}
                />
                <p style={{ color: '#B5B5B5', fontSize: '14px' }}>
                  India
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3">
                <Phone 
                  size={20} 
                  className="mt-1 flex-shrink-0"
                  style={{ color: '#F4C600' }}
                />
                <a
                  href="tel:+919974912354"
                  className="transition-colors duration-300 hover:underline"
                  style={{ color: '#B5B5B5', fontSize: '14px' }}
                  onMouseEnter={(e) => e.target.style.color = '#F4C600'}
                  onMouseLeave={(e) => e.target.style.color = '#B5B5B5'}
                >
                  +91 9974912354
                </a>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <Mail 
                  size={20} 
                  className="mt-1 flex-shrink-0"
                  style={{ color: '#F4C600' }}
                />
                <a
                  href="mailto:info@aluzen.in"
                  className="transition-colors duration-300 hover:underline"
                  style={{ color: '#B5B5B5', fontSize: '14px' }}
                  onMouseEnter={(e) => e.target.style.color = '#F4C600'}
                  onMouseLeave={(e) => e.target.style.color = '#B5B5B5'}
                >
                 info@aluzen.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div 
        className="w-full h-px"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
      />

      {/* Bottom Footer Bar */}
      <div className="max-w-7xl mx-auto px-5 md:px-12 lg:px-16 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <p 
            className="text-center md:text-left"
            style={{ color: '#B5B5B5', fontSize: '14px' }}
          >
            © 2025 Aluzen. All Rights Reserved. Crafted with ❤️ by <a href="#" target='_blank'><span style={{ color: '#F4C600' }}>#EcomSyncify</span></a>
          </p>

          {/* Legal Links */}
          <div className="flex items-center space-x-6">
            <NavLink
              to="/privacy"
              className="transition-colors duration-300"
              style={{ color: '#B5B5B5', fontSize: '14px' }}
              onMouseEnter={(e) => e.target.style.color = '#F4C600'}
              onMouseLeave={(e) => e.target.style.color = '#B5B5B5'}
            >
              Privacy Policy
            </NavLink>
            <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>|</span>
            <NavLink
              to="/terms"
              className="transition-colors duration-300"
              style={{ color: '#B5B5B5', fontSize: '14px' }}
              onMouseEnter={(e) => e.target.style.color = '#F4C600'}
              onMouseLeave={(e) => e.target.style.color = '#B5B5B5'}
            >
              Terms & Conditions
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}