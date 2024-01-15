import React from 'react'
import '../../styles/Card.sass';
import background from './buscadorcep.png';

const BuscadorDecCep = () => {
  return (
    <div className='content'>
      <span>ZIP Code Search</span>
      <div className="img">
        <img src={background} alt="ZIP code engine image" className='imagem'/>
      </div>
      <p className="job">React.js project for a ZIP code search engine that returns the requested location through an Api.</p>
      <div className="buttons">
        <button>Repository</button>
        <button>Deploy</button>
      </div>
    </div>
  )
}

export default BuscadorDecCep