import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import RulesModal from '../RulesModal/RulesModal'; // Import the RulesModal component

const Navbar = ({ setshowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const [showRules, setShowRules] = useState(false); // State for showing the rules modal
  const { cartItems, book_list } = useContext(StoreContext);
  const totalBooks = book_list.reduce(
    (sum, item) => sum + (cartItems[item._id] || 0),
    0
  );

  const handleRulesClick = () => {
    setShowRules(true); // Open the modal when "Rules" is clicked
  };

  return (
    <div className='navbar'>
      <Link to='/'>
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : " "}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("Books")} className={menu === "Books" ? "active" : " "}>Books</a>
        <a href='#app-download' onClick={() => setMenu("About us")} className={menu === "About us" ? "active" : " "}>About us</a>
        <a href='#footer' onClick={() => setMenu("Contact us")} className={menu === "Contact us" ? "active" : " "}>Contact us</a>
        <a href='#' onClick={handleRulesClick} className="navbar-menu-item">Rules</a> {/* New Rules Link */}
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'>
            <img src={assets.basket_icon} alt="" style={{
              filter: totalBooks > 0
                ? "brightness(0) saturate(100%) invert(28%) sepia(91%) saturate(3423%) hue-rotate(210deg) brightness(99%) contrast(91%)"
                : "none"
            }} />
          </Link>
          {totalBooks > 0 && <div className="dot"></div>}
        </div>
        <button onClick={() => setshowLogin(true)}>Sign in</button>
      </div>

      {/* Render the Rules Modal */}
      {showRules && <RulesModal closeModal={() => setShowRules(false)} />}
    </div>
  );
};

export default Navbar;