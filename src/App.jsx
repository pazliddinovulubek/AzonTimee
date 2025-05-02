import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navabar/Navbar';
import Time from './Components/Time/Time';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className={darkMode ? 'dark' : ''}>
        <Routes>
          <Route path="/" element={<Time darkMode={darkMode} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
