import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Navbar = () => {

  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
    console.log(isActive);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="brand-title">Brand Name</Link>
      <a href="#" className="toggle-button" onClick={toggleClass} >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className={isActive ? 'navbar-links active' : 'navbar-links'}>
        <ul>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/friends">Friends</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar

