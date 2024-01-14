import React from 'react'
import '../../styles/Card.sass';
import background from './todo.png';

const TodoList = () => {
  return (
    <div className='content'>
      <span>To do List</span>
      <div className="img">
        <img src={background} alt="Imagem do projeto To Do List" className='imagem'/>
      </div>
      <p className="job">Projeto React.js - Vite, é um site com propósito de organizar afazeres por um To Do List.</p>
      <button> Click</button>
    </div>
  )
}

export default TodoList