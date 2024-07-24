import React, { useState } from 'react';
import './Header.sass';
import { TfiLinkedin } from "react-icons/tfi";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <header id="about" className='header-container'>
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@700&display=swap" rel="stylesheet"></link>
      
      <div className="tres-barras-container" onClick={toggleSidebar}>
        <div className="barra"></div>
        <div className="barra"></div>
        <div className="barra"></div>
      </div>

      <div className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
        <div className="close-btn" onClick={toggleSidebar}><IoClose size={35}/></div>
        <a href="#about" onClick={closeSidebar}>About</a>
        <a href="#projects" onClick={closeSidebar}>Projects</a>
        <a href="#skills" onClick={closeSidebar}>Skills</a>
        <a href="#contacts" onClick={closeSidebar}>Contacts</a>
      </div>
      
      <div className="social-icons-container">
        <button>
          <a className='linkedin-button' href='https://www.linkedin.com/in/marcelo-nunes-a8b7a223a/' target="_blank"><TfiLinkedin/></a>
        </button>
        <button>
          <a className='gmail-button' href='mailto:marceloapetroni@gmail.com' target="_blank"><SiGmail/></a>
        </button>
        <button>
          <a className='github-button' href='https://github.com/marcelopetroni' target="_blank"><FaGithub/></a>
        </button>
      </div>
    </header>
  );
};

export default Header;
