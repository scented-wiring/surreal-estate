import React from 'react';
import '../styles/NavBar.css';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <img src="https://i.imgur.com/Al0Yc5p.png" 
      alt="Surreal Estate Logo" 
      className="logo">
      </img>
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to="/">View Properties</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/add-property">Add a Property</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar;