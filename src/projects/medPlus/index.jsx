import React from 'react';
import '../../components/Card.sass';
import background from './medp.png';

const MedPlus = () => {
  return (
    <div className='content'>
      <span>Med+</span>
      <div className="img">
        <img src={background} alt="Mobile Project Image" className='imagem'/>
      </div>
      <p className="job">Hackaton mobile project made in React Native, SqLite and Android Studio. It's an app that assists the rescheduling of appointments due to cancellations.</p>
      <div className="buttons">
        <button><a href="https://github.com/marcelopetroni/MedPlus" target='_blank'>Repository</a></button>
      </div>
    </div>
  )
}

export default MedPlus