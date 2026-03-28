import React from 'react';
import Slider from '../components/Slider';
import slide1 from '../assets/home/slide1.jpg';
import slide2 from '../assets/about/slide2.jpg';
import slide3 from '../assets/products/slide3.jpg';
import slide4 from '../assets/projects/slide4.jpg';

export default function TermsAndConditions() {
  const sliderData = [
    {
      id: 1,
      heading: 'Terms and Conditions',
      accentWord: 'Terms',
      subline: 'Please read our terms and conditions carefully before using our services.',
      cta: 'Read Terms',
      link: '#terms',
      bgImage: slide1
    },
    {
      id: 2,
      heading: 'Legal Framework',
      accentWord: 'Legal',
      subline: 'Understanding your rights and responsibilities with Aluzen.',
      cta: 'Learn More',
      link: '#legal',
      bgImage: slide2
    },
    {
      id: 3,
      heading: 'Service Agreement',
      accentWord: 'Agreement',
      subline: 'Terms governing our aluminium products and services.',
      cta: 'View Details',
      link: '#agreement',
      bgImage: slide3
    },
    {
      id: 4,
      heading: 'Professional Standards',
      accentWord: 'Standards',
      subline: 'Our commitment to quality and professional service delivery.',
      cta: 'Contact Us',
      link: '#contact',
      bgImage: slide4
    }
  ];

  return (
    <div className="w-full">
      <Slider slides={sliderData} />
      
      {/* Header Section */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#1C1C1C' }}>
        <div className="max-w-4xl mx-auto px-5 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
            Terms and Conditions
          </h1>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: '#F4C600' }} />
          <p className="text-lg" style={{ color: '#FFFFFF' }}>
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto px-5 md:px-12">
          <div className="space-y-8">
            
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
                1. Introduction
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#1C1C1C' }}>
                Welcome to Aluzen. These Terms and Conditions ("Terms") govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#1C1C1C' }}>
                Aluzen specializes in manufacturing and supplying premium aluminium windows, doors, and architectural systems. These Terms apply to all products and services offered by Aluzen.
              </p>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
                2. Our Services
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#1C1C1C' }}>
                Aluzen provides:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#1C1C1C' }}>
                <li>Design and manufacturing of aluminium windows and doors</li>
                <li>Sliding systems and casement solutions</li>
                <li>Slim partitions and shower enclosures</li>
                <li>Smart automation systems</li>
                <li>Installation and maintenance services</li>
                <li>Technical consultation and support</li>
              </ul>
            </div>

            {/* Orders and Payments */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
                3. Orders and Payments
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#1C1C1C' }}>
                All orders are subject to acceptance by Aluzen. We reserve the right to refuse or cancel any order at our discretion. Prices are subject to change without notice until order confirmation.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#1C1C1C' }}>
                Payment terms will be specified in your quotation. Full payment or agreed installments must be completed before delivery and installation.
              </p>
            </div>

            {/* Product Specifications */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
                4. Product Specifications
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#1C1C1C' }}>
                All products are manufactured according to agreed specifications. Minor variations in color, texture, or dimensions may occur due to manufacturing processes and are considered acceptable.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#1C1C1C' }}>
                Custom products are manufactured specifically for your project and cannot be returned unless defective.
              </p>
            </div>

            {/* Installation */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
                5. Installation Services
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#1C1C1C' }}>
                Installation services are provided by our certified technicians. Site conditions must be suitable for installation as per our technical requirements.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#1C1C1C' }}>
                Any additional work required due to site conditions not meeting specifications will be charged separately.
              </p>
            </div>

            {/* Warranty */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
                6. Warranty
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#1C1C1C' }}>
                Aluzen provides warranty on products and installation as specified in your agreement. Warranty covers manufacturing defects and does not cover normal wear and tear, misuse, or damage due to external factors.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#1C1C1C' }}>
                Warranty claims must be reported within the specified period and will be assessed by our technical team.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
                7. Limitation of Liability
              </h2>
              <p className="text-base leading-relaxed" style={{ color: '#1C1C1C' }}>
                Aluzen's liability is limited to the value of products and services provided. We are not liable for indirect, consequential, or incidental damages arising from the use of our products or services.
              </p>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
                8. Intellectual Property
              </h2>
              <p className="text-base leading-relaxed" style={{ color: '#1C1C1C' }}>
                All designs, technical drawings, and specifications remain the intellectual property of Aluzen. Customers may not reproduce, distribute, or use these materials without written permission.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
                9. Governing Law
              </h2>
              <p className="text-base leading-relaxed" style={{ color: '#1C1C1C' }}>
                These Terms are governed by the laws of India. Any disputes will be resolved through arbitration or in the courts of competent jurisdiction.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
                10. Contact Information
              </h2>
              <p className="text-base leading-relaxed" style={{ color: '#1C1C1C' }}>
                For questions about these Terms and Conditions, please contact us at info@aluzen.com or through our contact page.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: '#F4C600' }}>
        <div className="max-w-4xl mx-auto px-5 md:px-12 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
            Have Questions About Our Terms?
          </h2>
          <p className="text-lg mb-8" style={{ color: '#1C1C1C' }}>
            Our team is here to help clarify any questions you may have.
          </p>
          <button
            className="px-8 py-3 font-semibold uppercase transition-all duration-300"
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
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}