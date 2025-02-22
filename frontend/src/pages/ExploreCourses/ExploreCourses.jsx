import React, { useContext, useState } from 'react';
import './ExploreCourses.css';
import { StoreContext } from '../../context/StoreContext';

const ExploreCourses = () => {
  const { book_list } = useContext(StoreContext);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);

  // Categories
  const categories = ["Fiction", "Novel", "Fantasy", "Science", "History", "Spirituality", "Business", "Productivity"];

  // Function to handle category button click
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setPopupVisible(true);
  };

  // Function to count books in a category
  const countBooksInCategory = (category) => {
    return book_list.filter((item) => item.category === category).length;
  };

  // Function to generate a random number of lent books (less than or equal to the available stock)
  const countLentBooksInCategory = (category) => {
    const stockCount = countBooksInCategory(category);
    // Generate a random number of lent books that is between 0 and stockCount
    return Math.floor(Math.random() * stockCount);
  };

  // Close the popup
  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="explore-courses">
      <h2>Explore Our Courses</h2>
      <div className="category-buttons">
        {categories.map((category, index) => (
          <button
            key={index}
            className="category-button"
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Popup for displaying stock and lent info */}
      {popupVisible && selectedCategory && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3><u>{selectedCategory} Stock Info</u></h3>
            <p>
              <strong>Number of stock available in {selectedCategory}: </strong>{' '}
              {countBooksInCategory(selectedCategory)}
            </p>
            <p>
              <strong>Number of books that can be lent in {selectedCategory}: </strong>{' '}
              {countLentBooksInCategory(selectedCategory)}
            </p>
            <button className="close-popup" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExploreCourses;