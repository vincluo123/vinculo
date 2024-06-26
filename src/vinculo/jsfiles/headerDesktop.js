import React from 'react';
import { FaUser, FaShoppingCart, FaHeart, FaPhone } from 'react-icons/fa';
import '../cssfiles/headerDesktop.css';
import {Link} from 'react-router-dom'




const Header = () => {
  return (
    <header className="header">
      <div className="logo">

        <img src="vinculo.png" alt="Logo of the website" />

        <img src="Hilsa.png" alt="Logo" />

        <img src="./assets/Hilsa.png" alt="Logo" />

      </div>

      <nav className="navbar">
        <ul className="nav-menu">
          <li className="nav-item">

            <Link path="/boys">New Arrivals</Link>

            <a href="/new-arrivals">New Arrivals</a>

            <a href="/new-arrivals">New Arrivals</a>

          </li>
          <li className="nav-item dropdown">
            <a href="#">Infant</a>
            <ul className="dropdown-menu">
              <li><a href="#">Boys</a></li>
              <li><a href="#">Girls</a></li>
              <li><a href="#">Submenu 3</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a href="#">Girls</a>
            <ul className="dropdown-menu">
              <li><a href="#">Submenu 1</a></li>
              <li><a href="#">Submenu 2</a></li>
              <li><a href="#">Submenu 3</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">

            <Link path="/boys">Boys</Link>

            <a href="#">Boys</a>


            <a href="#">Boys</a>

            <ul className="dropdown-menu">
              <li><a href="#">Category 1</a></li>
              <li><a href="#">Category 2</a></li>
              <li><a href="#">Category 3</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="/deals">Deals</a>
          </li>
        </ul>
      </nav>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </div>

      <div className="icons">
        <div className="icon">
          <a href="/favorites">
            <FaHeart />
          </a>
        </div>
        <div className="icon">
          <a href="/cart">
            <FaShoppingCart />
          </a>
        </div>
        <div className="icon">
          <a href="/contact">
            <FaPhone />
          </a>
        </div>
        <div className="icon dropdown">
          <a href="/profile" className="dropdown-toggle">
            <FaUser />
          </a>
          <ul className="dropdown-menu">
            <li><a href="/login" className="dropdown-item">Login</a></li>
            <li><a href="/register" className="dropdown-item">Register</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;