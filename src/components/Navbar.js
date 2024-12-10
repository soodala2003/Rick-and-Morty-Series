import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/character">Characters</Link>
      <Link className="nav-link" to="/location">Locations</Link>
      <Link className="nav-link" to="/episode">Episodes</Link>
    </nav>
  );
};

export default Navbar;