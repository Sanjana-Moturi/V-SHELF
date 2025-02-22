import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setshowLogin }) => {
  const [currState, setcurrState] = useState("Login");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setshowLogin(true); // Set user as logged in
    navigate("/"); // Redirect to homepage
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleLogin}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setshowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>

        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input type="text" placeholder="Username (23BPS1702)" required />
          )}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Enter a Strong Password" required />
        </div>

        <button type="submit">{currState === "Sign Up" ? "Create Account" : "Login"}</button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the <a href="#">terms of use</a> & <a href="#">privacy policy</a></p>
        </div>

        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setcurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setcurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
