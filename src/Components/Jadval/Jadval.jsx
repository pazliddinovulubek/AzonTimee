import React from 'react'
import './Jadval.css'
function Jadval({ darkMode }) {
  return (
    <div className={`jadval-container ${darkMode ? 'dark' : ''}`}>
      <div className="jadval-carts"></div>
    </div >
  )
}

export default Jadval