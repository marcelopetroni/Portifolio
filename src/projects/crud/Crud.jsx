import React from 'react';
import '../../styles/Card.sass';
import background from './crud.png';

const Crud = () => {
  return (
    <div className='content'>
      <span>Crud</span>
      <div className="img">
        <img src={background} alt="Imagem Projeto CRUD" className='imagem'/>
      </div>
      <p className="job">Projeto com solicitações CRUD feito em React.js Vite + Sass para o front-end e Firebase para o back-end.</p>
      <button> Click</button>
    </div>
  )
}

export default Crud