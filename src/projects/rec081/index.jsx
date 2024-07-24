import React from 'react';
import '../../components/Card.sass';
import background from './recTeam.jpeg';

const Rec081 = () => {
  return (
    <div className='content'>
      <span>Rec 081</span>
      <div className="img">
        <img src={background} alt="Mobile Project Image" className='imagem'/>
      </div>
      <p className="job">Winning Hackaton mobile project made in React Native and Node.js. It's an app that has a gamification system for a shopping.</p>
      <div className="buttons">
        <button><a href="https://github.com/marcelopetroni/RecTeam" target='_blank'>Repository</a></button>
      </div>
    </div>
  )
}

export default Rec081