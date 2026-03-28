import { useState, useEffect } from 'react';
import { ArrowRight, Grid, Square, Layers, Droplets, Zap, Filter } from 'lucide-react';
import Slider from '../components/Slider';
import slide1 from '../assets/products/slide1.jpg';
import slide2 from '../assets/products/slide2.jpg';
import slide3 from '../assets/products/slide3.jpg';
import slide4 from '../assets/products/slide4.jpg';
import producta from '../assets/products/product.png'
import { NavLink } from 'react-router-dom';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([{ id: 'all', name: 'All Products', icon: Grid }]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(`${BASE_URL}/product/get`).then(r => r.json()),
      fetch(`${BASE_URL}/category/get?type=product`).then(r => r.json()),
    ]).then(([prodData, catData]) => {
      setProducts(prodData.data || []);
      const iconMap = { default: Grid };
      const cats = [{ id: 'all', name: 'All Products', icon: Grid }];
      (catData.data || []).forEach(c => {
        cats.push({ id: c.name, name: c.name, icon: Grid });
      });
      setCategories(cats);
    }).catch(() => {}).finally(() => setLoading(false));
  }, []);

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="w-full">
      <Slider slides={[
        { id: 1, heading: 'Premium Product Range', accentWord: 'Premium', subline: 'Discover our complete collection of aluminium systems.', cta: 'View Products', link: '#products', bgImage: slide1 },
        { id: 2, heading: 'Sliding Systems Excellence', accentWord: 'Excellence', subline: 'Smooth-glide systems for modern living spaces.', cta: 'Learn More', link: '#sliding', bgImage: slide2 },
        { id: 3, heading: 'Casement Solutions', accentWord: 'Solutions', subline: 'High-performance windows and doors for every need.', cta: 'Explore Range', link: '#casement', bgImage: slide3 },
        { id: 4, heading: 'Smart Automation Systems', accentWord: 'Smart', subline: 'Advanced technology meets premium design.', cta: 'Discover More', link: '#automation', bgImage: slide4 },
      ]} />
      
      {/* Products Header */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#1C1C1C' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
            Our Products
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#F4C600' }} />
          <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: '#E0E0E0' }}>
            Discover our comprehensive range of premium aluminium systems designed for modern architecture.
          </p>
        </div>
      </section>

      {/* Product Categories Filter */}
      <section className="py-12" style={{ backgroundColor: '#F2F2F2' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className="flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer"
                  style={{
                    backgroundColor: activeCategory === category.id ? '#F4C600' : '#FFFFFF',
                    color: activeCategory === category.id ? '#1C1C1C' : '#4A4A4A',
                    border: '1px solid #E0E0E0',
                    boxShadow: activeCategory === category.id ? '0 4px 12px rgba(244, 198, 0, 0.3)' : '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                >
                  <Icon size={18} />
                  <span className="font-medium">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              <div className="col-span-3 text-center py-20" style={{ color: '#9ca3af' }}>Loading products...</div>
            ) : filteredProducts.length === 0 ? (
              <div className="col-span-3 text-center py-20" style={{ color: '#9ca3af' }}>No products found in this category.</div>
            ) : filteredProducts.map((product, index) => (
              <div
                key={product._id}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="bg-white rounded-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2"
                style={{
                  boxShadow: hoveredCard === index 
                    ? '0 12px 24px rgba(0,0,0,0.15)' 
                    : '0 4px 8px rgba(0,0,0,0.1)',
                  border: hoveredCard === index ? '2px solid #F4C600' : '2px solid transparent'
                }}
              >
                {/* Product Image */}
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={product.image || producta} 
                    alt={product.name} 
                    className="w-full h-full object-contain"
                    onError={e => { e.target.src = producta; }}
                  />
                  <div 
                    className="absolute top-0 left-0 w-full h-1 transition-all duration-300"
                    style={{
                      backgroundColor: hoveredCard === index ? '#F4C600' : 'transparent'
                    }}
                  />
                </div>

                {/* Product Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#1C1C1C' }}>
                    {product.name}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: '#4A4A4A' }}>
                    {product.description}
                  </p>

                  {/* Key Specs */}
                  {product.specs?.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs font-semibold mb-2 uppercase tracking-wide" style={{ color: '#F4C600' }}>
                        Key Specifications
                      </p>
                      <ul className="space-y-1">
                        {product.specs.map((spec, specIndex) => (
                          <li key={specIndex} className="text-sm flex items-center" style={{ color: '#4A4A4A' }}>
                            <div className="w-1 h-1 rounded-full mr-2" style={{ backgroundColor: '#F4C600' }} />
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Know More Button */}
                  <NavLink to="/contact">
                    <button
                      className="w-full px-4 py-2 font-semibold uppercase transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                      style={{
                        backgroundColor: hoveredCard === index ? '#F4C600' : 'transparent',
                        color: hoveredCard === index ? '#1C1C1C' : '#F4C600',
                        border: '1px solid #F4C600',
                        borderRadius: '4px',
                        fontSize: '14px',
                        letterSpacing: '0.5px'
                      }}
                    >
                      <span>Know More</span>
                      <ArrowRight size={16} />
                    </button>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#1C1C1C' }}>
        <div className="max-w-4xl mx-auto px-5 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
            Need Custom Solutions?
          </h2>
          <p className="text-lg md:text-xl mb-10" style={{ color: '#E0E0E0' }}>
            Our team can design and manufacture bespoke aluminium systems tailored to your specific requirements.
          </p>
          <NavLink
          to='/getQuote'
            className="px-10 py-4 font-semibold uppercase transition-all duration-300 inline-flex items-center space-x-2 cursor-pointer"
            style={{
              backgroundColor: '#F4C600',
              color: '#1C1C1C',
              borderRadius: '4px',
              fontSize: '16px',
              letterSpacing: '0.5px',
              border: '2px solid #F4C600'
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
            <span>Get Custom Quote</span>
            <ArrowRight size={20} />
          </NavLink>
        </div>
      </section>
    </div>
  );
}