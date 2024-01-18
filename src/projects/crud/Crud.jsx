import React from 'react';
import '../../styles/Card.sass';
import background from './crud.png';

const Crud = () => {
  return (
    <div className='content'>
      <span>Crud</span>
      <div className="img">
        <img src={background} alt="CRUD project Image" className='imagem'/>
      </div>
      <p className="job">Project with CRUD requests made in React.js Vite + Sass for the front-end and Firebase for the back-end.</p>
      <div className="buttons">
        <button><a href="https://github.com/marcelopetroni/CrudReact" target='_blank'>Repository</a></button>
        <button><a href="https://crud-react-eight-pink.vercel.app/" target='_blank'>Deploy</a></button>
      </div>
    </div>
  )
}

export default Crud