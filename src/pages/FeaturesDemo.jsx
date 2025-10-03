import React from 'react';
import FeaturesDropdown from '../components/FeaturesDropdown';

const FeaturesDemo = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '32px'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        padding: '32px'
      }}>
        <h1 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#111827',
          marginBottom: '32px',
          textAlign: 'center'
        }}>
          DropCourse Features Dropdown Demo
        </h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <FeaturesDropdown />
        </div>
      </div>
    </div>
  );
};

export default FeaturesDemo;

