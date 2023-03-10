import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Butiken </Link>
        <Link to="/cart"> 🛒 </Link>
      </div>
    </div>
  );
};
