import "../styles/Card.sass";
import React from 'react'

const Card = ({content}) => {
  return (
    <div className="card">
        <div className="card-border-top"></div>
        <div className="img"></div>
        <span>{content}</span>
        <p className="job"> Job Title</p>
        <button> Click</button>
    </div>
  )
}

export default Card