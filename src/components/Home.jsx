import React from 'react'
import "../styles/home.sass";
import Card from './Card';
import BuscadorDecCep from '../projects/buscadorCep/BuscadorDeCep';
import Crud from '../projects/crud/Crud';
import Landingpage from '../projects/landingPage/Landingpage';
import TodoList from '../projects/todoList/TodoList';
import { useInView } from 'react-intersection-observer'; // para lidar com a animação de fade
import 'intersection-observer'; // biblioteca para ter suporte em todos os navegadores

const main = () => {

  const [projectsRef, projectsInView] = useInView({}); // section de projetos presente na tela

  const [skillsRef, skillsInView] = useInView({}); // section de skills presente na tela

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
      <h2 ref={projectsRef} id = "projects" className='projects-title' style={{ opacity: projectsInView ? 1 : 0, animation: projectsInView ? 'fade 2s ease both' : '' }}>Projects</h2>
      <section ref={projectsRef} className="projects-container" style={{ opacity: projectsInView ? 1 : 0, animation: projectsInView ? 'fade 2s ease both' : '' }}>
        <div className="cards-container">
          <Card content = {<Crud/>}/>
          <Card content = {<TodoList/>}/>
          <Card content = {<BuscadorDecCep/>}/>
          <Card content = {<Landingpage/>}/>
        </div>
      </section>
      <h2 ref={skillsRef} id = "skills" className='projects-title' style={{ opacity: skillsInView ? 1 : 0, animation: skillsInView ? 'fade 2s ease both' : '' }}>Skills</h2>    
      <section ref={skillsRef} className='skills-container' style={{ opacity: skillsInView ? 1 : 0, animation: skillsInView ? 'fade 2s ease both' : '' }} >
        <div className='skill'>
          <h4>React.js</h4>
          <div className="percentage-container"><div className="percentage react"></div></div>
        </div>
        <div className='skill'>
          <h4>React Native</h4>
          <div className="percentage-container"><div className="percentage native"></div></div>
        </div>
        <div className='skill'>
          <h4>HTML 5</h4>
          <div className="percentage-container"><div className="percentage html"></div></div>
        </div>
        <div className='skill'>
          <h4>CSS</h4>
          <div className="percentage-container"><div className="percentage css"></div></div>
        </div>
        <div className='skill'>
          <h4>Sass</h4>
          <div className="percentage-container"><div className="percentage sass"></div></div>
        </div>
        <div className='skill'>
          <h4>JavaScript</h4>
          <div className="percentage-container"><div className="percentage js"></div></div>
        </div>
        <div className='skill'>
          <h4>TypeScript</h4>
          <div className="percentage-container"><div className="percentage ts"></div></div>
        </div>
        <div className='skill'>
          <h4>Java</h4>
          <div className="percentage-container"><div className="percentage java"></div></div>
        </div>
        <div className='skill'>
          <h4>Python</h4>
          <div className="percentage-container"><div className="percentage python"></div></div>
        </div>
        <div className='skill'>
          <h4>C/C++</h4>
          <div className="percentage-container"><div className="percentage c"></div></div>
        </div>
        <div className='skill'>
          <h4>Node.js</h4>
          <div className="percentage-container"><div className="percentage node"></div></div>
        </div>
        <div className='skill'>
          <h4>Firebase</h4>
          <div className="percentage-container"><div className="percentage firebase"></div></div>
        </div>
        <div className='skill'>
          <h4>Git</h4>
          <div className="percentage-container"><div className="percentage git"></div></div>
        </div>
        <div className='skill'>
          <h4>Data Structure</h4>
          <div className="percentage-container"><div className="percentage data"></div></div>
        </div>
        <div className='skill'>
          <h4>OO Programing</h4>
          <div className="percentage-container"><div className="percentage programing"></div></div>
        </div>
        <div className='skill'>
          <h4>English</h4>
          <div className="percentage-container"><div className="percentage english"></div></div>
        </div>
        <div className='skill'>
          <h4>Excel</h4>
          <div className="percentage-container"><div className="percentage excel"></div></div>
        </div>
      </section>
    </main>
  )
}

export default main