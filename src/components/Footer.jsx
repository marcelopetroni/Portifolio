import React from 'react';
import "../styles/footer.sass";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <FaRegCopyright className='icon'/>
        <h4>Created by marcelopetroni - Front-end Developer</h4>
    </footer>
  );
};

export default Footer;