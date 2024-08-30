import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>Chigo</h1>
        </div>
        <nav>
          <ul>
            <li className='menu-item '>
              <Link to="/">
              <button className='homepage-button'>
              Home
              </button>
              </Link>
              </li>
            <li>
              <Link to="/about">
              <button className='about-button'>
                About Me
                </button>
              </Link>
              </li>
          </ul>
        </nav>
      </div>
      <form onsubmit="event.preventDefault();" role="search">
  <label for="search">Search for stuff</label>
  <input id="search" type="search" placeholder="Search..." autofocus required />
  <button type="submit">Go</button>    
</form>
    </header>
  );
};

export default Header;
