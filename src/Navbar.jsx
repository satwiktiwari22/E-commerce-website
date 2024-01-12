import "./Navbar.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  return (
    <div className="navbar-container">
      <h2 className="logo">SastaMaal.</h2>
      <ul className="navlinks">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>Products</li>
        <li>Cart</li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <div className="other-options">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          <div className="cart-count">{cartCount}</div>
          <img
            width="45"
            height="45"
            src="https://img.icons8.com/carbon-copy/100/FFFFFF/shopping-cart.png"
            alt="shopping-cart"
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/ios-filled/50/FFFFFF/name.png"
            alt="name"
          />
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/ios/50/FFFFFF/expand-arrow--v1.png"
            alt="expand-arrow--v1"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
