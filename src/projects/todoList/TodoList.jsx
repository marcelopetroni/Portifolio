import React from 'react'
import '../../styles/Card.sass';
import background from './todo.png';

const TodoList = () => {
  return (
    <div className='content'>
      <span>To do List</span>
      <div className="img">
        <img src={background} alt="To Do List project image" className='imagem'/>
      </div>
      <p className="job">React - Vite Project, it's a simple To Do List made for tasks organization.</p>
      <div className="buttons">
        <button>Repository</button>
        <button>Deploy</button>
      </div>
    </div>
  )
}

export default TodoList