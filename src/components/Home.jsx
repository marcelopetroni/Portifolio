import React from 'react'
import "../styles/home.sass";
import Card from './Card';
import BuscadorDecCep from '../projects/buscadorCep/BuscadorDeCep';
import Crud from '../projects/crud/Crud';
import Landingpage from '../projects/landingPage/Landingpage';
import TodoList from '../projects/todoList/TodoList';

const main = () => {
  return (
    <main>
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@700&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Libre+Bodoni:ital@1&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap" rel="stylesheet"></link>
      
      <section className='about-container'>
        <div className="titulo-container">
          <h1 className='titulo'>Hey there. My name is</h1>
            <div className="titulo-principal">
              <h1 className='titulo2'>Marcelo Petroni </h1>
            </div>
          <h3 className='descricao'>I turn code in responsive interfaces</h3>
          <p className='descricao2'>I'm currently a Computer Science student and 
          I aim to become a great Front-end developer and hopeful achieve all my goals in life, and of course, be happy along the way.</p>
        </div>
        <div className="icon-container">
          <h1 className='sombra'>M</h1>
          <h1 className='frontal'>M</h1>
        </div>
      </section>
      <h2 id = "projects" className='projects-title'>Projects</h2>
      <section className='projects-container'>
        <div className="cards-container">
          <Card content = {<Crud/>}/>
          <Card content = {<TodoList/>}/>
          <Card content = {<BuscadorDecCep/>}/>
          <Card content = {<Landingpage/>}/>
        </div>
      </section>    
    </main>
  )
}

export default main