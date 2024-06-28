import React from 'react';
import '../../components/Card.sass';
import background from './RotaWeb.png';

const BuscadorDecCep = () => {
  return (
    <div className='content'>
      <span>Rota Cultural Web</span>
      <div className="img">
        <img src={background} alt="Rota Cultural Web" className='imagem'/>
      </div>
      <p className="job">Project made in HTML, CSS and JavaScript. it's a platform that helps users find museums near their ZIP code and shop for products from their store.</p>
      <div className="buttons">
        <button><a href="https://github.com/marcelopetroni/roteiro-cultural" target='_blank'>Repository</a></button>
        <button><a href="https://roteiro-cultural.vercel.app/" target='_blank'>Deploy</a></button>
      </div>
    </div>
  )
}

export default BuscadorDecCep