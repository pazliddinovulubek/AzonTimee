import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.webp';

function Navbar({ darkMode, setDarkMode, menuOpen, setMenuOpen }) {
  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <div className="logo-brand">
        <img src={logo} alt="NamozTime logo" />
        <span className="brand">NamozTime</span>
      </div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Namoz Vaqtlari</Link>
        <Link to="/jadval" onClick={() => setMenuOpen(false)}>Jadval</Link>
        <Link to="/eslatmalar" onClick={() => setMenuOpen(false)}>Eslatmalar</Link>
      </div>

      <div className="nav-controls">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️' : '🌙'}
        </button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
