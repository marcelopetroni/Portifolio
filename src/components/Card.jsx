import "../styles/Card.sass";
import React from 'react';

const Card = ({content}) => {
  return (
    <div className="card">
        <div className="card-border-top"></div>
        {content}
    </div>
  )
}

export default Card