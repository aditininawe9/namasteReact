import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} />
        <div className="nav-items">
          <ul>
            <Link to="/" className="my-link">
              <li>Home</li>
            </Link>
            <Link to="/about" className="my-link">
              <li>About Us</li>
            </Link>

            <Link to="/contact" className="my-link">
              <li>Contact Us</li>
            </Link>
            <li>Cart</li>
            <button
              className="login"
              onClick={() => {
                isLoggedIn === "Login"
                  ? setIsLoggedIn("Logout")
                  : setIsLoggedIn("Login");
              }}
            >
              {isLoggedIn}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
