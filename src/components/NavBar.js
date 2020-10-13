import React from 'react';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <div className='navbar'>
      <img src="https://i.imgur.com/Al0Yc5p.png" 
      alt="Surreal Estate Logo" 
      className="logo">
      </img>
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <a href="test">View Properties</a>
        </li>
        <li className="navbar-links-item">
          <a href="test">Add a Property</a>
        </li>
      </ul>
    </div>
  )
}

export default NavBar;