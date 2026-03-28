import React from 'react';
import Slider from '../components/Slider';
import slide1 from '../assets/contact/slide1.jpg';
import slide2 from '../assets/why/slide2.jpg';
import slide3 from '../assets/home/slide3.jpg';
import slide4 from '../assets/about/slide4.jpg';

export default function PrivacyPolicy() {
  const sliderData = [
    {
      id: 1,
      heading: 'Privacy Policy',
      accentWord: 'Privacy',
      subline: 'Your privacy and data security are our top priorities.',
      cta: 'Read Policy',
      link: '#privacy',
      bgImage: slide1
    },
    {
      id: 2,
      heading: 'Data Protection',
      accentWord: 'Protection',
      subline: 'How we collect, use, and protect your personal information.',
      cta: 'Learn More',
      link: '#data',
      bgImage: slide2
    },
    {
      id: 3,
      heading: 'Your Rights',
      accentWord: 'Rights',
      subline: 'Understanding your rights regarding personal data.',
      cta: 'View Rights',
      link: '#rights',
      bgImage: slide3
    },
    {
      id: 4,
      heading: 'Secure Communications',
      accentWord: 'Secure',
      subline: 'Safe and confidential handling of all your information.',
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
            Privacy Policy
          </h1>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: '#F4C600' }} />
          <p className="text-lg" style={{ color: '#FFFFFF' }}>
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto px-5 md:px-12">
          <div className="space-y-8">
            
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
                1. Introduction
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#1C1C1C' }}>
                At Aluzen, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#1C1C1C' }}>
                By using our services, you consent to the data practices described in this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
                2. Information We Collect
              </h2>
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#F4C600' }}>
                Personal Information
              </h3>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#1C1C1C' }}>
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4" style={{ color: '#1C1C1C' }}>
                <li>Name and contact information (email, phone number, address)</li>
                <li>Project details and specifications</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Communication preferences</li>
                <li>Feedback and survey responses</li>
              </ul>
              
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#F4C600' }}>
                Automatically Collected Information
              </h3>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#1C1C1C' }}>
                <li>IP address and browser information</li>
                <li>Website usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Device information and operating system</li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
                3. How We Use Your Information
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#1C1C1C' }}>
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#1C1C1C' }}>
                <li>Providing and improving our products and services</li>
                <li>Processing orders and managing customer relationships</li>
                <li>Communicating about projects, updates, and support</li>
                <li>Sending marketing communications (with your consent)</li>
                <li>Analyzing website usage to improve user experience</li>
                <li>Complying with legal obligations</li>
                <li>Preventing fraud and ensuring security</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#1C1C1C' }}>
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#1C1C1C' }}>
                <li>With service providers who assist in our operations (installation teams, logistics partners)</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or merger</li>
                <li>With your explicit consent</li>
              </ul>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
                5. Data Security
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#1C1C1C' }}>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#1C1C1C' }}>
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
                6. Cookies and Tracking Technologies
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#1C1C1C' }}>
                We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie settings through your browser preferences.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#1C1C1C' }}>
                Essential cookies are necessary for website functionality, while optional cookies help us improve our services and provide personalized experiences.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
                7. Your Privacy Rights
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#1C1C1C' }}>
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#1C1C1C' }}>
                <li>Access: Request information about the data we hold about you</li>
                <li>Correction: Request correction of inaccurate or incomplete data</li>
                <li>Deletion: Request deletion of your personal data (subject to legal requirements)</li>
                <li>Portability: Request transfer of your data to another service provider</li>
                <li>Opt-out: Unsubscribe from marketing communications at any time</li>
                <li>Restriction: Request limitation of processing in certain circumstances</li>
              </ul>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
                8. Data Retention
              </h2>
              <p className="text-base leading-relaxed" style={{ color: '#1C1C1C' }}>
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
                9. Third-Party Links
              </h2>
              <p className="text-base leading-relaxed" style={{ color: '#1C1C1C' }}>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
                10. Children's Privacy
              </h2>
              <p className="text-base leading-relaxed" style={{ color: '#1C1C1C' }}>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us immediately.
              </p>
            </div>

            {/* Policy Updates */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
                11. Policy Updates
              </h2>
              <p className="text-base leading-relaxed" style={{ color: '#1C1C1C' }}>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last updated" date.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
                12. Contact Us
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#1C1C1C' }}>
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <ul className="list-none space-y-2" style={{ color: '#1C1C1C' }}>
                <li><strong>Email:</strong> privacy@aluzen.com</li>
                <li><strong>Phone:</strong> +91 9974912354</li>
                <li><strong>Address:</strong> Aluzen Privacy Officer, India</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: '#F4C600' }}>
        <div className="max-w-4xl mx-auto px-5 md:px-12 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
            Questions About Your Privacy?
          </h2>
          <p className="text-lg mb-8" style={{ color: '#1C1C1C' }}>
            We're committed to transparency and protecting your personal information.
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
            Contact Privacy Team
          </button>
        </div>
      </section>
    </div>
  );
}