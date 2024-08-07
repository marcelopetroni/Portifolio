import React from 'react'
import "./Home.sass";
import { MdEmail } from "react-icons/md";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { FaGithubSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";
import Card from './Card';
import EducaLivros from '../projects/educaLivros';
import MedPlus from '../projects/medPlus';
import Rec081 from '../projects/rec081';
import RedeRecife from '../projects/redeRecife';
import RotaCulturalWeb from '../projects/rotaCulturalWeb';
import RotaCulturalMobile from '../projects/rotaCulturalMobile';
import CadastroUsuario from '../projects/cadastroUsuario';
import BuscadorDeCep from '../projects/buscadorCep';
import Crud from '../projects/crud/Crud';
import Landingpage from '../projects/landingPage';
import TodoList from '../projects/todoList';
import { useInView } from 'react-intersection-observer'; // para lidar com a animação de fade
import 'intersection-observer'; // biblioteca para ter suporte em todos os navegadores

const Home = () => {

  const [projectsRef, projectsInView] = useInView({}); // section de projetos presente na tela

  const [skillsRef, skillsInView] = useInView({}); // section de skills presente na tela

  const [contactsRef, contactsInView] = useInView({}); // section de contatos presente na tela

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
          I aim to become a great web developer and hopeful achieve all my goals in life, and of course, be happy along the way.</p>
        </div>
        <div className="icon-container">
          <h1 className='sombra'>M</h1>
          <h1 className='frontal'>M</h1>
        </div>
      </section>
      <h2 ref={projectsRef} id = "projects" className='projects-title' style={{ opacity: projectsInView ? 1 : 0, animation: projectsInView ? 'fade 2s ease' : '' }}>Projects</h2>
      <section ref={projectsRef} className="projects-container" style={{ opacity: projectsInView ? 1 : 0, animation: projectsInView ? 'fade 2s ease' : '' }}>
        <div className="cards-container">
          <Card content = {<Rec081/>}/>
          <Card content = {<MedPlus/>}/>
          <Card content = {<Crud/>}/>
          <Card content = {<EducaLivros/>}/>
          <Card content = {<RedeRecife/>}/>
          <Card content = {<RotaCulturalMobile/>}/>
          <Card content = {<RotaCulturalWeb/>}/>
          <Card content = {<TodoList/>}/>
          <Card content = {<BuscadorDeCep/>}/>
          <Card content = {<Landingpage/>}/>
          <Card content = {<CadastroUsuario/>}/>
        </div>
      </section>
      <h2 ref={skillsRef} id = "skills" className='projects-title' style={{ opacity: skillsInView ? 1 : 0, animation: skillsInView ? 'fade 2s ease' : '' }}>Skills</h2>    
      <section ref={skillsRef} className='skills-container' style={{ opacity: skillsInView ? 1 : 0, animation: skillsInView ? 'fade 2s ease' : '' }} >
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
          <h4>SQL/PostgreSql</h4>
          <div className="percentage-container"><div className="percentage SQL"></div></div>
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
          <h4>Kotlin</h4>
          <div className="percentage-container"><div className="percentage kotlin"></div></div>
        </div>
        <div className='skill'>
          <h4>Excel</h4>
          <div className="percentage-container"><div className="percentage excel"></div></div>
        </div>
      </section>
      <h2 ref={contactsRef} id = "contacts" className='projects-title' style={{ opacity: contactsInView ? 1 : 0, animation: contactsInView ? 'fade 2s ease' : '' }}>Contacts</h2>
      <section className='contacts-container' ref={contactsRef} style={{ opacity: contactsInView ? 1 : 0, animation: contactsInView ? 'fade 2s ease' : '' }}>
        <div className="contact">
          <IoPerson /> <p>Marcelo Petroni</p>
        </div>
        <div className="contact">
          <FaLocationDot /><p>Recife - PE</p>
        </div>
        <div className="contact">
          <MdEmail /> <p>marceloapetroni@gmail.com</p>
        </div>
        <div className="contact">
          <PiMicrosoftOutlookLogoFill /> <p>marceloapetroni@hotmail.com</p>
        </div>
        <div className="contact">
          <IoLogoWhatsapp /> <p>(81) 99915-8289 </p>
        </div>
        <div className="contact">
          <BsLinkedin /> <p>https://www.linkedin.com/in/marcelo-nunes-a8b7a223a/</p>
        </div>
        <div className="contact">
          <FaGithubSquare /> <p>https://github.com/marcelopetroni</p>
        </div>
      </section>
    </main>
  )
}

export default Home;