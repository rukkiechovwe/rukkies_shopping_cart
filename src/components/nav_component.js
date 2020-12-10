import React from "react";
import { Link } from "react-router-dom";

function NavComponent({ cart }) {
  return (
    <nav className="nav">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/" className="link">
        Products
      </Link>
      <Link to="/cart" className="link">
        Cart ({cart.total})
      </Link>
    </nav>
  );
}

export default NavComponent;
