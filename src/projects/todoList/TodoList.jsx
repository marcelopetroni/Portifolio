import React from 'react'
import '../../components/Card.sass';
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
        <button><a href="https://github.com/marcelopetroni/ToDoListReact" target='_blank'>Repository</a></button>
        <button><a href="https://to-do-list-react-bb8y.vercel.app/" target='_blank'>Deploy</a></button>
      </div>
    </div>
  )
}

export default TodoList