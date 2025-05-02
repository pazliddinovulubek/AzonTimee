import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navabar/Navbar';
import Time from './Components/Time/Time';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <Router>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className={darkMode ? 'dark' : ''}>
        <Routes>
          <Route path="/" element={<Time darkMode={darkMode} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
