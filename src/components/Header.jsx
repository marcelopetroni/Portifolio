import React from 'react';
import '/src/styles/header.sass';
import { TfiLinkedin } from "react-icons/tfi";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header id = "about" className='header-container'>
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@700&display=swap" rel="stylesheet"></link>
        <div className="tres-barras-container">
          <div className="barra"></div>
          <div className="barra"></div>
          <div className="barra"></div>
        </div>

        <div className="nav-container">
            <a href="#about" >About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contacts">Contacts</a>
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
  )
}

export default Header;