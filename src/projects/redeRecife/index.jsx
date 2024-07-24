import React from 'react';
import '../../components/Card.sass';
import background from './redeRecife.png';

const RedeRecife = () => {
  return (
    <div className='content'>
      <span>Rede Recife</span>
      <div className="img">
        <img src={background} alt="Mobile Project Image" className='imagem'/>
      </div>
      <p className="job">Hackaton mobile project made in React Native, Expo Go. It's an app that helps people in climate disaster situations.</p>
      <div className="buttons">
        <button><a href="https://github.com/marcelopetroni/RedeRecife" target='_blank'>Repository</a></button>
      </div>
    </div>
  )
}

export default RedeRecife