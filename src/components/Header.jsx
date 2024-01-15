import React from 'react'
import "../styles/header.sass";
import { TfiLinkedin } from "react-icons/tfi";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const header = () => {
  return (
    <header className='header-container'>
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@700&display=swap" rel="stylesheet"></link>
        <div className="tres-barras-container">
          <div className="barra"></div>
          <div className="barra"></div>
          <div className="barra"></div>
        </div>

        <div className="nav-container">
            <a>About</a>
            <a>Projects</a>
            <a>Skills</a>
            <a>Contacts</a>
        </div>
        <div className="social-icons-container">
            <button className='linkedin-button'>
              <TfiLinkedin />
            </button>

            <button className='gmail-button'>
              <SiGmail/>
            </button>
           
            <button className='github-button'>
              <FaGithub />
            </button>
        </div>
    </header>
  )
}

export default header