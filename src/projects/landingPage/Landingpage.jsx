import React from 'react'
import '../../styles/Card.sass';
import background from './landingpage.png';

const Landingpage = () => {
  return (
    <div className='content'>
      <span>Landing Page</span>
      <div className="img">
        <img src={background} alt="Landing Page project image" className='imagem'/>
      </div>
      <p className="job">Landing page Project made in HTML CSS and incorporated into React.js. The aim was to learn how to create a fixed header in a page.</p>
      <div className="buttons">
        <button>Repository</button>
        <button>Deploy</button>
      </div>
    </div>
  )
}

export default Landingpage