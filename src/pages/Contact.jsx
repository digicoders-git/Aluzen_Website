import { useState } from 'react';
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import Slider from '../components/Slider';
import slide1 from '../assets/contact/slide1.jpg';
import slide2 from '../assets/contact/slide2.jpg';
import slide3 from '../assets/contact/slide3.jpg';
import slide4 from '../assets/contact/slide4.jpg';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [focusedField, setFocusedField] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const sliderData = [
    {
      id: 1,
      heading: 'Let\'s Build Something Together',
      accentWord: 'Together',
      subline: 'Have a project in mind? Get in touch with Aluzen for expert guidance.',
      cta: 'Contact Us',
      link: '#contact',
      bgImage: slide1
    },
    {
      id: 2,
      heading: 'Expert Guidance Available',
      accentWord: 'Expert',
      subline: 'Our team is here to help you bring your vision to life.',
      cta: 'Get Started',
      link: '#form',
      bgImage: slide2
    },
    {
      id: 3,
      heading: 'Precision-Crafted Solutions',
      accentWord: 'Precision',
      subline: 'Whether residential or commercial, we\'re ready to assist you.',
      cta: 'Send Message',
      link: '#message',
      bgImage: slide3
    },
    {
      id: 4,
      heading: 'Professional Support Always',
      accentWord: 'Professional',
      subline: 'All enquiries are handled professionally and responded to promptly.',
      cta: 'Visit Us',
      link: '#location',
      bgImage: slide4
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(`${BASE_URL}/contact/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Something went wrong');
      setSubmitted(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (err) {
      alert(err.message || 'Failed to submit. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <Slider slides={sliderData} />
      
      {/* Contact Intro Section */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto px-5 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1C1C1C' }}>
            Let's Build Something Together
          </h2>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: '#F4C600' }} />
          <div className="space-y-6">
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#4A4A4A' }}>
              Have a project in mind or need expert guidance on aluminium windows and doors? Get in touch with Aluzen — our team is here to help you bring your vision to life.
            </p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#4A4A4A' }}>
              Whether it's a residential space or a commercial project, we're ready to assist you with precision-crafted solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
                Send Us a Message
              </h3>
              <p className="text-base mb-8" style={{ color: '#4A4A4A' }}>
                Fill in the details below and our team will get back to you at the earliest.
              </p>

              {submitted ? (
                <div className="py-12 px-6 rounded-xl text-center" style={{ backgroundColor: '#f0fdf4', border: '2px solid #bbf7d0' }}>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#22c55e' }}>
                    <svg width="32" height="32" fill="none" stroke="#fff" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold mb-2" style={{ color: '#15803d' }}>Enquiry Submitted!</h4>
                  <p className="text-base mb-1" style={{ color: '#166534' }}>Thank you for reaching out to us.</p>
                  <p className="text-sm mb-6" style={{ color: '#166534' }}>Our team will get back to you within 24 hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-3 text-sm font-semibold uppercase transition-all duration-300"
                    style={{ backgroundColor: '#F4C600', color: '#1C1C1C', border: '2px solid #F4C600', borderRadius: '4px', cursor: 'pointer', letterSpacing: '0.5px' }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#1C1C1C'; e.currentTarget.style.color = '#F4C600'; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#F4C600'; e.currentTarget.style.color = '#1C1C1C'; }}
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField('')}
                    placeholder="Your Full Name"
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300"
                    style={{
                      border: `2px solid ${focusedField === 'name' ? '#F4C600' : '#D0D0D0'}`,
                      backgroundColor: '#FFFFFF',
                      color: '#1C1C1C',
                      fontSize: '16px'
                    }}
                    required
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField('')}
                    placeholder="Your Phone Number"
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300"
                    style={{
                      border: `2px solid ${focusedField === 'phone' ? '#F4C600' : '#D0D0D0'}`,
                      backgroundColor: '#FFFFFF',
                      color: '#1C1C1C',
                      fontSize: '16px'
                    }}
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                    placeholder="Your Email Address"
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300"
                    style={{
                      border: `2px solid ${focusedField === 'email' ? '#F4C600' : '#D0D0D0'}`,
                      backgroundColor: '#FFFFFF',
                      color: '#1C1C1C',
                      fontSize: '16px'
                    }}
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField('')}
                    placeholder="Tell us about your project or requirement"
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 resize-vertical"
                    style={{
                      border: `2px solid ${focusedField === 'message' ? '#F4C600' : '#D0D0D0'}`,
                      backgroundColor: '#FFFFFF',
                      color: '#1C1C1C',
                      fontSize: '16px'
                    }}
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full md:w-auto px-8 py-3 font-semibold uppercase transition-all duration-300 inline-flex items-center justify-center space-x-2 cursor-pointer"
                  style={{
                    backgroundColor: submitting ? '#d4a800' : '#F4C600',
                    color: '#1C1C1C',
                    borderRadius: '4px',
                    fontSize: '16px',
                    letterSpacing: '0.5px',
                    border: '2px solid #F4C600',
                    fontWeight: '600',
                    opacity: submitting ? 0.8 : 1,
                    cursor: submitting ? 'not-allowed' : 'pointer'
                  }}
                  onMouseEnter={(e) => { if (!submitting) { e.currentTarget.style.backgroundColor = '#1C1C1C'; e.currentTarget.style.color = '#F4C600'; } }}
                  onMouseLeave={(e) => { if (!submitting) { e.currentTarget.style.backgroundColor = '#F4C600'; e.currentTarget.style.color = '#1C1C1C'; } }}
                >
                  <span>{submitting ? 'Submitting...' : 'Submit Enquiry'}</span>
                  {!submitting && <ArrowRight size={18} />}
                </button>
              </form>
              )}

              {/* Trust Reassurance */}
              <p className="text-sm mt-6" style={{ color: '#4A4A4A' }}>
                We respect your time and privacy. All enquiries are handled professionally and responded to promptly by our team.
              </p>
            </div>

            {/* Map Section */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
                Visit Our Location
              </h3>
              <p className="text-base mb-6" style={{ color: '#4A4A4A' }}>
                Our facility is strategically located to serve clients efficiently and support seamless project coordination.
              </p>

              {/* Map Placeholder */}
              <div 
                className="w-full h-90 rounded-lg overflow-hidden"
                style={{ 
                  backgroundColor: '#F2F2F2',
                  border: '1px solid #E0E0E0'
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.99842513128!2d80.77769995!3d26.8466999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lucknow Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-16" style={{ backgroundColor: '#F2F2F2' }}>
        <div className="max-w-4xl mx-auto px-5 md:px-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: '#1C1C1C' }}>
            Get in Touch
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Location */}
            <div className="text-center">
              <div 
                className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#F4C600' }}
              >
                <MapPin size={24} style={{ color: '#1C1C1C' }} />
              </div>
              <h4 className="font-semibold mb-2" style={{ color: '#1C1C1C' }}>Location</h4>
              <p style={{ color: '#4A4A4A' }}>India</p>
            </div>

            {/* Phone */}
            <div className="text-center">
              <div 
                className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#F4C600' }}
              >
                <Phone size={24} style={{ color: '#1C1C1C' }} />
              </div>
              <h4 className="font-semibold mb-2" style={{ color: '#1C1C1C' }}>Phone</h4>
              <p style={{ color: '#4A4A4A' }}>+91 9974912354</p>
            </div>

            {/* Email */}
            <div className="text-center">
              <div 
                className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#F4C600' }}
              >
                <Mail size={24} style={{ color: '#1C1C1C' }} />
              </div>
              <h4 className="font-semibold mb-2" style={{ color: '#1C1C1C' }}>Email</h4>
              <p style={{ color: '#4A4A4A' }}>info@aluzen.in</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}