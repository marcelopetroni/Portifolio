import React from 'react';
import "./Footer.sass";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <FaRegCopyright className='icon'/>
        <h4>Created by marcelopetroni - Web Developer</h4>
    </footer>
  );
};

export default Footer;