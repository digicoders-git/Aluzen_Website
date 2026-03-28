import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Slider from '../components/Slider';
import slide1 from '../assets/quote/slide1.jpg';
import slide2 from '../assets/quote/slide2.jpg';
import slide3 from '../assets/quote/slide3.jpg';
import slide4 from '../assets/quote/slide4.jpg';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function GetQuote() {
  const [formData, setFormData] = useState({
    fullName: '', phone: '', email: '',
    productCategory: '', projectType: '', projectDetails: ''
  });
  const [focusedField, setFocusedField] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const sliderData = [
    {
      id: 1,
      heading: 'Get a Quote',
      accentWord: 'Quote',
      subline: 'Share your requirement with us and receive a tailored aluminium solution.',
      cta: 'Request Quote',
      link: '#quote',
      bgImage: slide1
    },
    {
      id: 2,
      heading: 'Tailored Solutions for You',
      accentWord: 'Tailored',
      subline: 'Our team will guide you with the right product, design, and specifications.',
      cta: 'Get Started',
      link: '#form',
      bgImage: slide2
    },
    {
      id: 3,
      heading: 'Professional Guidance Always',
      accentWord: 'Professional',
      subline: 'Receive expert advice and accurate quotations for your project.',
      cta: 'Contact Us',
      link: '#contact',
      bgImage: slide3
    },
    {
      id: 4,
      heading: 'Quality Solutions Delivered',
      accentWord: 'Quality',
      subline: 'From concept to completion, we ensure premium aluminium systems.',
      cta: 'Learn More',
      link: '#about',
      bgImage: slide4
    }
  ];

  const productCategories = [
    'Select Product Type',
    'Sliding Systems',
    'Casement Windows & Doors',
    'Slim Partitions',
    'Shower Enclosures',
    'Smart Automation',
    'Not Sure – Need Guidance'
  ];

  const projectTypes = [
    'Select Project Type',
    'Residential',
    'Commercial',
    'Interior',
    'Renovation / Upgrade'
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
      const res = await fetch(`${BASE_URL}/quote/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Something went wrong');
      setSubmitted(true);
      setFormData({ fullName: '', phone: '', email: '', productCategory: '', projectType: '', projectDetails: '' });
    } catch (err) {
      alert(err.message || 'Failed to submit. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <Slider slides={sliderData} />
      
      {/* Page Header */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto px-5 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1C1C1C' }}>
            Get a Quote
          </h1>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: '#F4C600' }} />
          <div className="space-y-6">
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#4A4A4A' }}>
              Share your requirement with us and receive a tailored aluminium solution designed for your space.
            </p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#4A4A4A' }}>
              Our team will understand your needs and guide you with the right product, design, and specifications.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto px-5 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
              Request Your Quotation
            </h2>
            <p className="text-base" style={{ color: '#4A4A4A' }}>
              Please fill in the details below. This will help us provide you with an accurate and relevant quotation.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {submitted ? (
              <div className="py-14 px-6 rounded-xl text-center" style={{ backgroundColor: '#f0fdf4', border: '2px solid #bbf7d0' }}>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#22c55e' }}>
                  <svg width="32" height="32" fill="none" stroke="#fff" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold mb-2" style={{ color: '#15803d' }}>Quote Request Submitted!</h4>
                <p className="text-base mb-1" style={{ color: '#166534' }}>Thank you for reaching out to Aluzen.</p>
                <p className="text-sm mb-6" style={{ color: '#166534' }}>Our team will review your requirements and get back to you within 24 hours.</p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 text-sm font-semibold uppercase transition-all duration-300"
                  style={{ backgroundColor: '#F4C600', color: '#1C1C1C', border: '2px solid #F4C600', borderRadius: '4px', cursor: 'pointer', letterSpacing: '0.5px' }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#1C1C1C'; e.currentTarget.style.color = '#F4C600'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#F4C600'; e.currentTarget.style.color = '#1C1C1C'; }}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
            <>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#1C1C1C' }}>
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('fullName')}
                  onBlur={() => setFocusedField('')}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg transition-all duration-300"
                  style={{
                    border: `2px solid ${focusedField === 'fullName' ? '#F4C600' : '#D0D0D0'}`,
                    backgroundColor: '#FFFFFF',
                    color: '#1C1C1C',
                    fontSize: '16px'
                  }}
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#1C1C1C' }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField('')}
                  placeholder="Enter your contact number"
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
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#1C1C1C' }}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField('')}
                placeholder="Enter your email address"
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

            <div className="grid md:grid-cols-2 gap-6">
              {/* Product Category */}
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#1C1C1C' }}>
                  Product Category
                </label>
                <select
                  name="productCategory"
                  value={formData.productCategory}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('productCategory')}
                  onBlur={() => setFocusedField('')}
                  className="w-full px-4 py-3 rounded-lg transition-all duration-300"
                  style={{
                    border: `2px solid ${focusedField === 'productCategory' ? '#F4C600' : '#D0D0D0'}`,
                    backgroundColor: '#FFFFFF',
                    color: '#1C1C1C',
                    fontSize: '16px'
                  }}
                  required
                >
                  {productCategories.map((category, index) => (
                    <option key={index} value={index === 0 ? '' : category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#1C1C1C' }}>
                  Project Type
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('projectType')}
                  onBlur={() => setFocusedField('')}
                  className="w-full px-4 py-3 rounded-lg transition-all duration-300"
                  style={{
                    border: `2px solid ${focusedField === 'projectType' ? '#F4C600' : '#D0D0D0'}`,
                    backgroundColor: '#FFFFFF',
                    color: '#1C1C1C',
                    fontSize: '16px'
                  }}
                  required
                >
                  {projectTypes.map((type, index) => (
                    <option key={index} value={index === 0 ? '' : type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#1C1C1C' }}>
                Project Details <span style={{ color: '#4A4A4A', fontWeight: 'normal' }}>(Optional)</span>
              </label>
              <textarea
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('projectDetails')}
                onBlur={() => setFocusedField('')}
                placeholder="Share dimensions, location, timeline, or any specific requirements you may have"
                rows="4"
                className="w-full px-4 py-3 rounded-lg transition-all duration-300 resize-vertical"
                style={{
                  border: `2px solid ${focusedField === 'projectDetails' ? '#F4C600' : '#D0D0D0'}`,
                  backgroundColor: '#FFFFFF',
                  color: '#1C1C1C',
                  fontSize: '16px'
                }}
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={submitting}
                className="px-8 py-4 font-semibold uppercase transition-all duration-300 inline-flex items-center space-x-2 cursor-pointer"
                style={{
                  backgroundColor: submitting ? '#d4a800' : '#F4C600',
                  color: '#1C1C1C',
                  borderRadius: '4px',
                  fontSize: '16px',
                  letterSpacing: '0.5px',
                  fontWeight: '600',
                  border: '1px solid #F4C600',
                  opacity: submitting ? 0.8 : 1,
                  cursor: submitting ? 'not-allowed' : 'pointer'
                }}
                onMouseEnter={(e) => { if (!submitting) { e.currentTarget.style.backgroundColor = '#1C1C1C'; e.currentTarget.style.color = '#F4C600'; } }}
                onMouseLeave={(e) => { if (!submitting) { e.currentTarget.style.backgroundColor = '#F4C600'; e.currentTarget.style.color = '#1C1C1C'; } }}
              >
                <span>{submitting ? 'Submitting...' : 'Request a Quote'}</span>
                {!submitting && <ArrowRight size={18} />}
              </button>
            </div>

            {/* Trust Reassurance */}
            <p className="text-sm text-center mt-6" style={{ color: '#4A4A4A' }}>
              Your information is safe with us. All enquiries are handled professionally and responded to by our team at the earliest.
            </p>
            </>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}