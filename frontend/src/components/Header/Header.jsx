import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();  // Initialize useNavigate

  const handleViewStock = () => {
    navigate('/explore-courses');  // Navigate to explore courses page
  };

  return (
    <div className="header">
      <div className="header-contents">
        <h2>Get your <br />desired Book</h2>
        <p>Choose which subject you need featuring a<br />delectable array of subjects </p>
        <button onClick={handleViewStock} className="view-stock-button">
          View Stock
        </button>
      </div>
    </div>
  );
};

export default Header;