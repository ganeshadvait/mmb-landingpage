import React, { useState, useEffect } from 'react';
import LPLogo from '../../img/logo-m.png';
import LPMenu from "./LPMenu";
import LPCtas from './LPCalltoactions';
import './LPstyles.css';

const Lheader = () => {
    const [menuVisible, setMenuVisible] = useState(false);
  
    const toggleMenu = () => {
      setMenuVisible(prevMenuVisible => !prevMenuVisible);
    };

  return (
    <>
      <header className="landing-page-header">
        <div className="Logo-box">
          <img src={LPLogo} alt="Landing Page Logo" />
        </div>
        <div className='lpmenu-container'>
          <LPMenu />
        </div>
        <div className="ctas-container">
          <LPCtas />
        </div>
        <div className={`humburger-div ${menuVisible ? 'active' : ''}`} 
          onClick={toggleMenu}>
          <div className="top-bar bar"></div>
          <div className="bottom-bar bar"></div>
        </div>
      </header>
      <section className={`mobile-menu-drawer ${menuVisible ? 'show' : ''}`}>
        <div>
        <LPMenu />
          <div>
            <button className="button">Get transport</button>
          </div>
        </div>
      </section>
    </>
  );
};


export default Lheader;
