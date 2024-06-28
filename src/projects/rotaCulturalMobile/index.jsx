import React from 'react';
import '../../components/Card.sass';
import background from './RotaMobile.jpeg';

const BuscadorDecCep = () => {
  return (
    <div className='content'>
      <span>Rota Cultural Mobile</span>
      <div className="img">
        <img src={background} alt="Rota Cultural Mobile" className='imagem'/>
      </div>
      <p className="job">Project made in Kontlin in Android Studio. It's a museum platform app to buy tickets and products from their store.</p>
      <div className="buttons">
        <button><a href="https://github.com/marcelopetroni/projeto_mobile_rota_cultural" target='_blank'>Repository</a></button>
      </div>
    </div>
  )
}

export default BuscadorDecCep