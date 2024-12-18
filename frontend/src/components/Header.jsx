import React from 'react';

import '../styles/Header.css';

function Header() {
  return (
    <header>
      <div className="header-style">
        <h2>STRIKE & ELLACOTT AGENCY</h2>  
        <h2>PRIVATE INVESTIGATOR</h2>
        <ul className="header-menu-style">
          <li>CASES</li>
          <li>DETECTIVE PROFILES</li>
          <button>APPLY</button>
          <button>DARK MOODE</button>
        </ul>
      </div>
      <div className="banner-style">
        <h1 className="banner-title">STRIKE & ELLACOTT AGENCY</h1>
        <p className="banner-subtitle">
        Redesign or reinterpretation of both bold<br/>
        rustic intrigue in London and Cornwall,<br/>
        a detective agency inspired theme.
        </p>
      </div>
    </header>
  );
}

export default Header;
