import { useState, useEffect } from 'react';
import { ArrowRight, Building, Home, Grid, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from '../components/Slider';
import slide1 from '../assets/projects/slide1.jpg';
import slide2 from '../assets/projects/slide2.jpg';
import slide3 from '../assets/projects/slide3.webp';
import slide4 from '../assets/projects/slide4.jpg';
import { NavLink } from 'react-router-dom';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const sliderData = [
  {
    id: 1, heading: 'Projects That Define Quality', accentWord: 'Quality',
    subline: 'Precision-crafted aluminium solutions brought to life across residential and commercial spaces.',
    cta: 'View Projects', link: '#projects', bgImage: slide1
  },
  {
    id: 2, heading: 'Real Spaces. Real Results.', accentWord: 'Real',
    subline: 'Every project reflects our commitment to precision engineering and thoughtful design.',
    cta: 'Explore Work', link: '#showcase', bgImage: slide2
  },
  {
    id: 3, heading: 'Trusted by Modern Architecture', accentWord: 'Trusted',
    subline: 'From residences to commercial developments, delivering excellence.',
    cta: 'See Projects', link: '#featured', bgImage: slide3
  },
  {
    id: 4, heading: 'Excellence in Every Installation', accentWord: 'Excellence',
    subline: 'Aluminium systems that combine strength, aesthetics, and performance.',
    cta: 'Start Project', link: '#contact', bgImage: slide4
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [currentFeatured, setCurrentFeatured] = useState(0);
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([{ id: 'all', name: 'All Projects', icon: Grid }]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(`${BASE_URL}/project/get`).then(r => r.json()),
      fetch(`${BASE_URL}/category/get?type=project`).then(r => r.json()),
    ]).then(([projData, catData]) => {
      setProjects(projData.data || []);
      const iconMap = { residential: Home, commercial: Building, interiors: Grid, automation: Zap };
      const cats = [{ id: 'all', name: 'All Projects', icon: Grid }];
      (catData.data || []).forEach(c => {
        cats.push({ id: c.name, name: c.name, icon: iconMap[c.name.toLowerCase()] || Grid });
      });
      setCategories(cats);
    }).catch(() => {}).finally(() => setLoading(false));
  }, []);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const featuredProjects = projects.slice(0, 3);

  const nextFeatured = () => setCurrentFeatured(p => (p + 1) % featuredProjects.length);
  const prevFeatured = () => setCurrentFeatured(p => (p - 1 + featuredProjects.length) % featuredProjects.length);

  return (
    <div className="w-full">
      <Slider slides={sliderData} />

      {/* Intro */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
            Real Spaces. Real Results.
          </h2>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: '#F4C600' }} />
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#4A4A4A' }}>
              Every project at Aluzen reflects our commitment to precision engineering, thoughtful design, and reliable execution.
            </p>
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#4A4A4A' }}>
              From modern residences to large commercial developments, our aluminium systems are trusted for their strength, clean aesthetics, and long-term performance.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12" style={{ backgroundColor: '#F2F2F2' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className="flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 relative cursor-pointer"
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: activeCategory === category.id ? '#1C1C1C' : '#4A4A4A',
                    border: '1px solid #E0E0E0',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                  }}
                >
                  <Icon size={18} />
                  <span className="font-medium">{category.name}</span>
                  {activeCategory === category.id && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5" style={{ backgroundColor: '#F4C600' }} />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          {loading ? (
            <div className="text-center py-20" style={{ color: '#9ca3af' }}>Loading projects...</div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-20" style={{ color: '#9ca3af' }}>No projects found in this category.</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project._id}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group relative overflow-hidden rounded-lg transition-all duration-300 transform hover:-translate-y-2"
                  style={{
                    boxShadow: hoveredProject === index ? '0 12px 24px rgba(0,0,0,0.15)' : '0 4px 8px rgba(0,0,0,0.1)'
                  }}
                >
                  <div className="relative h-64 bg-gray-200 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className={`absolute inset-0 transition-all duration-300 flex items-center justify-center ${hoveredProject === index ? 'opacity-100' : 'opacity-0'}`}
                      style={{ backgroundColor: 'rgba(28, 28, 28, 0.8)' }}
                    >
                      <div className="text-center">
                        <div className="w-16 h-1 mx-auto mb-4" style={{ backgroundColor: '#F4C600' }} />
                        <p className="text-white font-semibold">View Project</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-lg font-bold mb-2" style={{ color: '#1C1C1C' }}>{project.title}</h3>
                    <div className="flex justify-between items-center text-sm" style={{ color: '#4A4A4A' }}>
                      <span className="font-medium">{project.type}</span>
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Carousel — only show if we have projects */}
      {featuredProjects.length > 0 && (
        <section id="featured" className="py-20 md:py-28" style={{ backgroundColor: '#F2F2F2' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1C1C1C' }}>Featured Projects</h2>
              <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#F4C600' }} />
              <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: '#4A4A4A' }}>
                Selected projects that showcase our design capability, engineering precision, and commitment to excellence.
              </p>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-lg">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentFeatured * 100}%)` }}
                >
                  {featuredProjects.map((project) => (
                    <div key={project._id} className="w-full flex-shrink-0">
                      <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                          <div className="p-8 text-white">
                            <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                            <p className="text-base opacity-90">{project.type} · {project.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {featuredProjects.length > 1 && (
                <>
                  <button onClick={prevFeatured} className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full" style={{ backgroundColor: 'rgba(244, 198, 0, 0.9)', color: '#1C1C1C' }}>
                    <ChevronLeft size={24} />
                  </button>
                  <button onClick={nextFeatured} className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full" style={{ backgroundColor: 'rgba(244, 198, 0, 0.9)', color: '#1C1C1C' }}>
                    <ChevronRight size={24} />
                  </button>
                  <div className="flex justify-center mt-6 space-x-2">
                    {featuredProjects.map((_, index) => (
                      <button key={index} onClick={() => setCurrentFeatured(index)} className="w-3 h-3 rounded-full transition-all duration-300"
                        style={{ backgroundColor: currentFeatured === index ? '#F4C600' : '#C0C0C0' }} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#F4C600' }}>
        <div className="max-w-4xl mx-auto px-5 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1C1C1C' }}>Have a Project in Mind?</h2>
          <p className="text-lg md:text-xl mb-10" style={{ color: '#1C1C1C' }}>
            Partner with Aluzen to bring precision-crafted aluminium solutions to your next space.
          </p>
          <NavLink
            to="/products"
            className="px-10 py-4 font-semibold uppercase transition-all duration-300 inline-flex items-center space-x-2 cursor-pointer"
            style={{ backgroundColor: '#1C1C1C', color: '#F4C600', borderRadius: '4px', fontSize: '16px', letterSpacing: '0.5px', border: '2px solid #1C1C1C' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#1C1C1C'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#1C1C1C'; e.currentTarget.style.color = '#F4C600'; }}
          >
            <span>Explore Our Products</span>
            <ArrowRight size={20} />
          </NavLink>
        </div>
      </section>
    </div>
  );
}
