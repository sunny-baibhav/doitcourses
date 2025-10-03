import React, { useState } from 'react';
import { 
  BookOpen, 
  Users, 
  FileText, 
  Edit, 
  Video, 
  Bot 
} from 'lucide-react';

const FeaturesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const features = [
    {
      icon: BookOpen,
      title: "Courses",
      description: "Premium courses built by experts",
      iconColor: "text-yellow-500",
      bgColor: "bg-yellow-50"
    },
    {
      icon: Users,
      title: "Communities",
      description: "Instant 2k+ member community",
      iconColor: "text-yellow-500",
      bgColor: "bg-yellow-50"
    },
    {
      icon: FileText,
      title: "Landing Pages",
      description: "Plug & play landing pages in 2 mins",
      iconColor: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      icon: Edit,
      title: "Course Editor",
      description: "Customise, white-label & make it yours",
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Video,
      title: "Content Library",
      description: "25k+ pre-edited videos to go viral",
      iconColor: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      icon: Bot,
      title: "AI Instructors",
      description: "Built-in AI course content assistants",
      iconColor: "text-purple-500",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <div style={{ position: 'relative' }}>
      {/* Features Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          color: '#374151',
          border: 'none',
          background: 'none',
          cursor: 'pointer',
          transition: 'color 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.color = '#111827'}
        onMouseLeave={(e) => e.target.style.color = '#374151'}
      >
        <span style={{ fontWeight: '500' }}>Features</span>
        <svg
          style={{
            width: '16px',
            height: '16px',
            transition: 'transform 0.2s',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
          }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          marginTop: '8px',
          width: '600px',
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          border: '1px solid #f3f4f6',
          padding: '24px',
          zIndex: 50
        }}>
          {/* Heading */}
          <h3 style={{ fontSize: '14px', fontWeight: '500', color: '#111827', marginBottom: '16px' }}>Popular Features</h3>
          
          {/* Features Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              const bgColor = feature.bgColor === 'bg-yellow-50' ? '#fefce8' : 
                             feature.bgColor === 'bg-red-50' ? '#fef2f2' :
                             feature.bgColor === 'bg-blue-50' ? '#eff6ff' :
                             feature.bgColor === 'bg-green-50' ? '#f0fdf4' :
                             feature.bgColor === 'bg-purple-50' ? '#faf5ff' : '#f9fafb';
              const iconColor = feature.iconColor === 'text-yellow-500' ? '#eab308' :
                               feature.iconColor === 'text-red-500' ? '#ef4444' :
                               feature.iconColor === 'text-blue-500' ? '#3b82f6' :
                               feature.iconColor === 'text-green-500' ? '#22c55e' :
                               feature.iconColor === 'text-purple-500' ? '#a855f7' : '#6b7280';
              
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: bgColor,
                    borderRadius: '8px',
                    padding: '16px',
                    height: '90px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    cursor: 'pointer',
                    transition: 'box-shadow 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'}
                  onMouseLeave={(e) => e.target.style.boxShadow = 'none'}
                >
                  <div style={{ flexShrink: 0 }}>
                    <IconComponent style={{ width: '24px', height: '24px', color: iconColor }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h4 style={{ fontWeight: '600', color: '#111827', fontSize: '14px', marginBottom: '4px' }}>
                      {feature.title}
                    </h4>
                    <p style={{ fontSize: '12px', color: '#6b7280', lineHeight: '1.5' }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturesDropdown;

