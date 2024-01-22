import React from 'react';
import '../../components/Card.sass';
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
        <button><a href="https://github.com/marcelopetroni/BuscadorCepReact" target='_blank'>Repository</a></button>
        <button><a href="https://buscador-cep-react-phi.vercel.app/" target='_blank'>Deploy</a></button>
      </div>
    </div>
  )
}

export default BuscadorDecCep