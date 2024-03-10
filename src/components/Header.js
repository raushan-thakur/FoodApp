import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/img/Logo.jpeg";
import useOnline from "../utils/useOnline";

const Title = () => {
  return (
    <a href="/">
      <img className="h-20" src={Logo} alt="logo" />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  return (
    <div className="flex">
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

      <div className="">
        <ul className="flex">
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

          <Link to="/instamart">
            <li>Instamart</li>
          </Link>
          <li>{isOnline ? "✅" : "🔴"}</li>
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
