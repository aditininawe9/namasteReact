import { LOGO_URL } from "../utils/constant";
import { useState, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext)

  return (
    <div className="flex">
      <div className="flex">
        <img className="w-30" src={LOGO_URL} />
        <div className="nav-items">
          <ul>
          <li>{onlineStatus === true? <h4 style={{color: "green"}}>online</h4>: <h4 style={{color: "red"}}>offline</h4>}</li>
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
            <li><strong>{loggedInUser}</strong></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
