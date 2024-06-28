import React from 'react';
import '../../components/Card.sass';
import background from './CadastroUs.png';

const BuscadorDecCep = () => {
  return (
    <div className='content'>
      <span>User Register</span>
      <div className="img">
        <img src={background} alt="User Register Form" className='imagem'/>
      </div>
      <p className="job">User register form made in HTML, CSS and JavaScript. It's a simple form to inform personal data.</p>
      <div className="buttons">
        <button><a href="https://github.com/marcelopetroni/CadastroUsuario" target='_blank'>Repository</a></button>
        <button><a href="https://cadastro-usuario-nu.vercel.app/" target='_blank'>Deploy</a></button>
      </div>
    </div>
  )
}

export default BuscadorDecCep