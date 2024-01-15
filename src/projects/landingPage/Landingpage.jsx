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
      <p className="job"> Projeto de uma Landing page feita em HTML CSS e incorporada ao React.js com intuito de aprender header fixa na página.</p>
      <div className="buttons">
        <button>Repository</button>
        <button>Deploy</button>
      </div>
    </div>
  )
}

export default Landingpage