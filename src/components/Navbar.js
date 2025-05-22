import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="logo">Jenisha. J</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to='/certificate'>Certificates</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;
