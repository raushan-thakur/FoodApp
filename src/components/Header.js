import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Assets/img/Logo.jpeg";

const Title = () => {
  return (
    <a href="/">
      <img className="logo" src={Logo} alt="logo" />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />

      {/* <div>
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />

        <button className="log-btn">Search</button>
      </div> */}

      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <li>Cart</li>
          <li>
            {isLoggedIn ? (
              <button
                className="log-btn"
                onClick={() => {
                  setIsLoggedIn(false);
                }}
              >
                LogOut
              </button>
            ) : (
              <button
                className="log-btn"
                onClick={() => {
                  setIsLoggedIn(true);
                }}
              >
                LogIn
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
