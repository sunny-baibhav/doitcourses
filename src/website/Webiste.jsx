import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import From from './From';
import Navbar from './Navbar';
import CoursesSection from './CoursesSection';

const Webiste = () => {
  const [formData, setFormData] = useState({ email: '', domain: '' });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const courses = [
    {
      id: 1,
      title: 'Web Development Masterclass',
      description: 'Learn HTML, CSS, JavaScript and React from scratch',
      price: '$99',
      image: '/1.png',
      category: 'Development'
    },
    {
      id: 2,
      title: 'Digital Marketing Pro',
      description: 'Master SEO, Social Media, and Content Marketing',
      price: '$79',
      image: '/2.png',
      category: 'Marketing'
    },
    {
      id: 3,
      title: 'UI/UX Design Fundamentals',
      description: 'Create stunning user interfaces and experiences',
      price: '$89',
      image: '/3.png',
      category: 'Design'
    },
    {
      id: 4,
      title: 'Python Programming',
      description: 'From basics to advanced Python programming',
      price: '$119',
      image: '/4.png',
      category: 'Development'
    },
    {
      id: 5,
      title: 'E-commerce Excellence',
      description: 'Build and scale your online store',
      price: '$149',
      image: '/ecom.svg',
      category: 'Business'
    },
    {
      id: 6,
      title: 'Content Creation',
      description: 'Master video editing and content strategy',
      price: '$69',
      image: '/profitup.png',
      category: 'Creative'
    }
  ];

  const carouselImages = ['/1.png', '/2.png', '/3.png', '/4.png', '/profitup.png', '/profitup1.png'];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };

  const handleFormChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Domain registered! Email: ${formData.email}, Domain: ${formData.domain}`);
  };

  const handleEditCourse = (courseId, courseDomain) => {
    alert(`Editing course ${courseId} with domain: ${courseDomain || formData.domain || 'your-domain.com'}`);
  };

  const buttonStyle = {
    padding: windowWidth < 640 ? '0.75rem 1.25rem' : '0.5rem 1rem',
    border: '1px solid #007bff',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    textAlign: 'center',
    width: windowWidth < 992 ? '100%' : 'auto'
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
    borderColor: '#0056b3'
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000' }}>
      {/* Navbar */}
      <Navbar />

      {/* Courses Section */}
     <CoursesSection />

      {/* Image Carousel */}
      <section style={{ padding: windowWidth < 640 ? '2rem 1rem' : '3rem 1rem', backgroundColor: '#000' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: windowWidth < 640 ? '1.5rem' : '2rem', fontWeight: 'bold', color: '#fff', marginBottom: '0.5rem' }}>
              Gallery <span style={{ background: 'linear-gradient(to right, #a78bfa, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Showcase</span>
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '1rem' }}>Explore our visual content library</p>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <Slider {...sliderSettings}>
              {carouselImages.map((image, index) => (
                <div key={index} style={{ padding: '0 0.5rem' }}>
                  <div style={{
                    backgroundColor: '#1f2937',
                    borderRadius: '1rem',
                    overflow: 'hidden',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                    border: '1px solid #374151',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}>
                    <img src={image} alt={`Gallery ${index + 1}`}
                      style={{
                        width: '100%',
                        height: windowWidth < 640 ? '200px' : '250px',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                      onError={e => e.target.src = `https://via.placeholder.com/600x400?text=Image+${index + 1}`}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <From handleFormChange={handleFormChange} handleSubmit={handleSubmit} formData={formData} />
    </div>
  );
};

export default Webiste;
