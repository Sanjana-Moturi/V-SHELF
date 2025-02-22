import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import EBill from './components/EBill/EBill';
import ExploreCourses from './pages/ExploreCourses/ExploreCourses';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <div className="app">
        {isLoggedIn && <Navbar setshowLogin={setIsLoggedIn} />}
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home /> : <LoginPopup setshowLogin={setIsLoggedIn} />} />
          <Route path="/cart" element={isLoggedIn ? <Cart /> : <LoginPopup setshowLogin={setIsLoggedIn} />} />
          <Route path="/e-bill" element={isLoggedIn ? <EBill /> : <LoginPopup setshowLogin={setIsLoggedIn} />} />
          <Route path="/explore-courses" element={isLoggedIn ? <ExploreCourses /> : <LoginPopup setshowLogin={setIsLoggedIn} />} />
          <Route path="/login" element={<LoginPopup setshowLogin={setIsLoggedIn} />} />
        </Routes>
      </div>
      {isLoggedIn && <Footer />}
    </>
  );
};

export default App;
