import React from 'react';
import { useState } from 'react';

const Navbar = () => {

  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
    console.log(isActive);
  };

  return (
    <nav className="navbar">
      <div className="brand-title">Brand Name</div>
      <a href="#" className="toggle-button" onClick={toggleClass} >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className={isActive ? 'navbar-links active' : 'navbar-links'}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar

