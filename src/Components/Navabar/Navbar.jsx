import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.webp';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <div className={`navbar ${darkMode ? 'dark' : ''}`}>
      <div className="logo-brand">
        <img src={logo} alt="NamozTime logo" />
        <span className="brand">NamozTime</span>
      </div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/">Namoz Vaqtlari</Link>
        <Link to="/jadval">Jadval</Link>
        <Link to="/eslatmalar">Eslatmalar</Link>
      </div>

      <div className="nav-controls">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '🌙' : '☀️'}
        </button>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
    </div>
  );
}

export default Navbar;
