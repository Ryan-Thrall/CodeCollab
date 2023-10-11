import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginButton from './LoginButton.js';
import LogoutButton from './LogoutButton.js';

const Navbar = () => {

  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
    console.log(isActive);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="brand-title">Code Collab</Link>
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
          <li><LoginButton /></li>
          <li><LogoutButton /></li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar

