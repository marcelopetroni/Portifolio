import React from 'react'
import '../../styles/Card.sass';
import background from './buscadorcep.png';

const BuscadorDecCep = () => {
  return (
    <div className='content'>
      <span>Buscador de CEP</span>
      <div className="img">
        <img src={background} alt="Imagem do projeto Buscador de CEP" className='imagem'/>
      </div>
      <p className="job">Projeto React.js de um buscador de Cep que retorna a localização requisitada através de uma Api.</p>
      <div className="buttons">
        <button>Repository</button>
        <button>Deploy</button>
      </div>
    </div>
  )
}

export default BuscadorDecCep