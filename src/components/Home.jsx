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
          <h1 className='titulo'>Olá, meu nome é</h1>
          <h1 className='titulo2'>Marcelo Petroni</h1>
          <h3 className='descricao'>Transformo linhas de código em interfaces.</h3>
          <p className='descricao2'>Estudante de Ciência da computação, e também,</p>
          <p className='descricao2'>sou aspirante em Desenvolvimento Front-end ツ</p>
        </div>
        <div className="icon-container">
          <h1 className='sombra'>M</h1>
          <h1 className='frontal'>M</h1>
        </div>
      </section>
      <h2 className='projects-title'>Projetos</h2>
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