import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/img/Logo.jpeg";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <a href="/">
      <img className="h-20 p-2" src={Logo} alt="logo" />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex items-center justify-between  text-white bg-gradient-to-t from-slate-600 to-slate-800 ">
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

      <div className=" mx-10">
        <ul className="flex gap-7 p-5 ">
          <li className="text-green-400">{user.name}</li>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/instamart">
            <li>Instamart</li>
          </Link>
          <Link to="/cart">
            <li>Cart- {cartItems.length} items</li>
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
