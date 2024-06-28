import React from 'react';
import '../../components/Card.sass';
import background from './Logico.png';

const BuscadorDecCep = () => {
  return (
    <div className='content'>
      <span>Educa Livros</span>
      <div className="img">
        <img src={background} alt="Project image" className='imagem'/>
      </div>
      <p className="job">SQL Database project made in PostgreSql that simulates the necessary data structure for a school with a library. it has Views, Triggers and Stored Procedures.</p>
      <div className="buttons">
        <button><a href="https://github.com/marcelopetroni/EducaLivros-Online" target='_blank'>Repository</a></button>
      </div>
    </div>
  )
}

export default BuscadorDecCep