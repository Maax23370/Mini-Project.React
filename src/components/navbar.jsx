import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Home - Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
        <FaShoppingBasket size={32} />
        </Link>
      </div>
    </div>
  );
};
