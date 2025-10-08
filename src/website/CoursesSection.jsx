import React, { useState, useEffect } from 'react';

const CoursesSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [courses, setCourses] = useState([
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
  ]);

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [editData, setEditData] = useState({ price: '', link: '' });

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleEditCourse = (courseId, data) => {
    setCourses(prev =>
      prev.map(c =>
        c.id === courseId ? { ...c, price: data.price, link: data.link } : c
      )
    );
  };

  // Button styles
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
    <section
      id="courses"
      style={{
        padding: windowWidth < 640 ? '2rem 1rem' : '3rem 1rem',
        backgroundColor: '#000'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2
            style={{
              fontSize: windowWidth < 640 ? '1.5rem' : '2rem',
              fontWeight: 'bold',
              color: '#fff',
              marginBottom: '0.5rem'
            }}
          >
            All{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Courses
            </span>
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '1rem' }}>
            Browse through our comprehensive collection of courses
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {courses.map(course => (
            <div
              key={course.id}
              style={{
                backgroundColor: '#1f2937',
                borderRadius: '1rem',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                border: '1px solid #374151',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            >
              <div
                style={{
                  height: '160px',
                  overflow: 'hidden',
                  position: 'relative',
                  background:
                    'linear-gradient(to bottom right, rgba(59,130,246,0.2), rgba(139,92,246,0.2))'
                }}
              >
                <img
                  src={course.image}
                  alt={course.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.8,
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
                  onError={e =>
                    (e.target.src =
                      'https://via.placeholder.com/400x300?text=' + course.title)
                  }
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(31,41,55,0.6), transparent)'
                  }}
                ></div>
              </div>

              <div style={{ padding: '1rem' }}>
                <span
                  style={{
                    display: 'inline-block',
                    background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                    color: '#fff',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    marginBottom: '0.5rem'
                  }}
                >
                  {course.category}
                </span>

                <h3
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 'bold',
                    color: '#fff',
                    marginBottom: '0.5rem',
                    transition: 'color 0.3s'
                  }}
                  onMouseOver={e => (e.currentTarget.style.color = '#3b82f6')}
                  onMouseOut={e => (e.currentTarget.style.color = '#fff')}
                >
                  {course.title}
                </h3>

                <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '1rem' }}>
                  {course.description}
                </p>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}
                >
                  <span
                    style={{
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    {course.price}
                  </span>

                  <button
                    style={buttonStyle}
                    onMouseOver={e => Object.assign(e.currentTarget.style, buttonHoverStyle)}
                    onMouseOut={e => Object.assign(e.currentTarget.style, buttonStyle)}
                    onClick={() => {
                      setSelectedCourse(course);
                      setEditData({ price: course.price, link: course.link || '' });
                      setIsEditOpen(true);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Modal */}
      {isEditOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.6)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999
          }}
          onClick={() => setIsEditOpen(false)}
        >
          <div
            style={{
              background: '#1f2937',
              padding: '2rem',
              borderRadius: '1rem',
              maxWidth: '400px',
              width: '90%',
              color: '#fff',
              position: 'relative'
            }}
            onClick={e => e.stopPropagation()}
          >
            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 'bold' }}>
              Edit Course
            </h3>

            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Price</label>
            <input
              type="text"
              value={editData.price}
              onChange={e => setEditData({ ...editData, price: e.target.value })}
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #374151',
                marginBottom: '1rem',
                background: '#111827',
                color: '#fff'
              }}
            />

            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Link</label>
            <input
              type="text"
              value={editData.link}
              onChange={e => setEditData({ ...editData, link: e.target.value })}
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #374151',
                marginBottom: '1rem',
                background: '#111827',
                color: '#fff'
              }}
            />

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
              <button
                style={buttonStyle}
                onMouseOver={e => Object.assign(e.currentTarget.style, buttonHoverStyle)}
                onMouseOut={e => Object.assign(e.currentTarget.style, buttonStyle)}
                onClick={() => setIsEditOpen(false)}
              >
                Cancel
              </button>

              <button
                style={buttonStyle}
                onMouseOver={e => Object.assign(e.currentTarget.style, buttonHoverStyle)}
                onMouseOut={e => Object.assign(e.currentTarget.style, buttonStyle)}
                onClick={() => {
                  handleEditCourse(selectedCourse.id, editData);
                  setIsEditOpen(false);
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CoursesSection;
