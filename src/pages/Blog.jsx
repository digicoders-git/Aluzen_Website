import { useState, useEffect } from 'react';
import { ArrowRight, Clock, Tag, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Slider from '../components/Slider';
import slide1 from '../assets/about/slide1.jpg';
import slide2 from '../assets/about/slide2.jpg';
import slide3 from '../assets/projects/slide1.jpg';
import slide4 from '../assets/projects/slide2.jpg';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const sliderData = [
  {
    id: 1,
    heading: 'Insights from the World of Aluminium',
    accentWord: 'Aluminium',
    subline: 'Expert articles, tips, and trends in modern architecture and aluminium systems.',
    cta: 'Read Articles',
    link: '#blogs',
    bgImage: slide1,
  },
  {
    id: 2,
    heading: 'Design Ideas for Modern Spaces',
    accentWord: 'Design',
    subline: 'Explore how premium aluminium solutions are shaping contemporary interiors and facades.',
    cta: 'Explore',
    link: '#blogs',
    bgImage: slide2,
  },
  {
    id: 3,
    heading: 'Tips, Trends & Technical Guides',
    accentWord: 'Trends',
    subline: 'Stay updated with the latest in aluminium technology, installation best practices, and design inspiration.',
    cta: 'Read More',
    link: '#blogs',
    bgImage: slide3,
  },
  {
    id: 4,
    heading: 'Knowledge That Builds Better Spaces',
    accentWord: 'Knowledge',
    subline: 'From product comparisons to project showcases — everything you need to make informed decisions.',
    cta: 'Get Started',
    link: '#blogs',
    bgImage: slide4,
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState(['All']);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}/blog/get`)
      .then(r => r.json())
      .then(d => {
        const data = d.data || [];
        setBlogs(data);
        const uniqueCats = ['All', ...new Set(data.map(b => b.category).filter(Boolean))];
        setCategories(uniqueCats);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const filtered = activeCategory === 'All'
    ? blogs
    : blogs.filter(b => b.category === activeCategory);

  const featured = blogs.find(b => b.featured);
  const gridBlogs = activeCategory === 'All' ? blogs.filter(b => !b.featured) : filtered;

  return (
    <div className="w-full">
      <Slider slides={sliderData} />

      {/* Intro */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto px-5 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
            Aluzen Blog
          </h2>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: '#F4C600' }} />
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#4A4A4A' }}>
            Expert insights, design inspiration, and practical guides on aluminium systems, modern architecture, and interior solutions — written by the Aluzen team.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featured && activeCategory === 'All' && (
        <section className="pb-16" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="max-w-7xl mx-auto px-5 md:px-12">
            <div className="grid lg:grid-cols-2 gap-0 rounded-xl overflow-hidden shadow-xl border border-gray-100">
              {/* Image */}
              <div className="relative overflow-hidden" style={{ minHeight: '380px' }}>
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  style={{ minHeight: '380px' }}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(28,28,28,0.3), transparent)' }} />
                <span
                  className="absolute top-6 left-6 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded"
                  style={{ backgroundColor: '#F4C600', color: '#1C1C1C' }}
                >
                  Featured
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-10 md:p-14" style={{ backgroundColor: '#1C1C1C' }}>
                <span
                  className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider mb-4"
                  style={{ color: '#F4C600' }}
                >
                  <Tag size={12} /> {featured.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight" style={{ color: '#FFFFFF' }}>
                  {featured.title}
                </h3>
                <p className="text-base leading-relaxed mb-6" style={{ color: '#B5B5B5' }}>
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4 mb-8">
                  <span className="flex items-center gap-1 text-sm" style={{ color: '#6b7280' }}>
                    <Clock size={14} /> {featured.readTime}
                  </span>
                  <span className="text-sm" style={{ color: '#6b7280' }}>
                    {new Date(featured.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                </div>
                <Link to="/contact">
                  <button
                    className="inline-flex items-center gap-2 px-7 py-3 font-semibold uppercase transition-all duration-300"
                    style={{
                      backgroundColor: '#F4C600', color: '#1C1C1C',
                      borderRadius: '4px', fontSize: '14px',
                      letterSpacing: '0.5px', border: '2px solid #F4C600'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#F4C600'; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#F4C600'; e.currentTarget.style.color = '#1C1C1C'; }}
                  >
                    Read Article <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-10" style={{ backgroundColor: '#F2F2F2' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300"
                style={{
                  backgroundColor: activeCategory === cat ? '#1C1C1C' : '#FFFFFF',
                  color: activeCategory === cat ? '#F4C600' : '#4A4A4A',
                  border: `1px solid ${activeCategory === cat ? '#1C1C1C' : '#E0E0E0'}`,
                }}
              >
                {cat}
                <span className="ml-2 text-xs opacity-70">
                  ({cat === 'All' ? blogs.length : blogs.filter(b => b.category === cat).length})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section id="blogs" className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          {loading ? (
            <div className="text-center py-20" style={{ color: '#9ca3af' }}>Loading articles...</div>
          ) : gridBlogs.length === 0 ? (
            <div className="text-center py-20" style={{ color: '#9ca3af' }}>
              No articles found in this category.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridBlogs.map((blog) => (
                <div
                  key={blog._id}
                  onMouseEnter={() => setHoveredCard(blog._id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="rounded-xl overflow-hidden transition-all duration-300"
                  style={{
                    border: '1px solid #E0E0E0',
                    boxShadow: hoveredCard === blog._id ? '0 12px 32px rgba(0,0,0,0.12)' : '0 2px 8px rgba(0,0,0,0.05)',
                    transform: hoveredCard === blog._id ? 'translateY(-4px)' : 'translateY(0)',
                  }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ height: '220px' }}>
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500"
                      style={{ transform: hoveredCard === blog._id ? 'scale(1.06)' : 'scale(1)' }}
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(28,28,28,0.4), transparent)' }} />
                    <span
                      className="absolute top-4 left-4 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded"
                      style={{ backgroundColor: '#F4C600', color: '#1C1C1C' }}
                    >
                      {blog.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex items-center gap-1 text-xs" style={{ color: '#9ca3af' }}>
                        <Clock size={12} /> {blog.readTime}
                      </span>
                      <span className="text-xs" style={{ color: '#9ca3af' }}>
                        {new Date(blog.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </span>
                    </div>
                    <h3
                      className="text-lg font-bold mb-3 leading-snug transition-colors duration-300"
                      style={{ color: hoveredCard === blog._id ? '#F4C600' : '#1C1C1C' }}
                    >
                      {blog.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: '#4A4A4A' }}>
                      {blog.excerpt.length > 120 ? blog.excerpt.slice(0, 120) + '...' : blog.excerpt}
                    </p>
                    <Link to="/contact">
                      <span
                        className="inline-flex items-center gap-1 text-sm font-semibold transition-colors duration-300"
                        style={{ color: hoveredCard === blog._id ? '#1C1C1C' : '#F4C600' }}
                      >
                        Read More <ChevronRight size={15} />
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#F4C600' }}>
        <div className="max-w-4xl mx-auto px-5 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1C1C1C' }}>
            Have a Project in Mind?
          </h2>
          <p className="text-lg md:text-xl mb-10" style={{ color: '#1C1C1C' }}>
            Get in touch with our team for expert guidance on aluminium solutions tailored to your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button
                className="px-10 py-4 font-semibold uppercase transition-all duration-300 inline-flex items-center gap-2"
                style={{
                  backgroundColor: '#1C1C1C', color: '#F4C600',
                  borderRadius: '4px', fontSize: '15px',
                  letterSpacing: '0.5px', border: '2px solid #1C1C1C'
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#1C1C1C'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#1C1C1C'; e.currentTarget.style.color = '#F4C600'; }}
              >
                Contact Us <ArrowRight size={18} />
              </button>
            </Link>
            <Link to="/products">
              <button
                className="px-10 py-4 font-semibold uppercase transition-all duration-300 inline-flex items-center gap-2"
                style={{
                  backgroundColor: 'transparent', color: '#1C1C1C',
                  borderRadius: '4px', fontSize: '15px',
                  letterSpacing: '0.5px', border: '2px solid #1C1C1C'
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#1C1C1C'; e.currentTarget.style.color = '#F4C600'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#1C1C1C'; }}
              >
                Explore Products <ChevronRight size={18} />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
