import React from 'react'
import "../styles/home.sass";

const main = () => {
  return (
    <main>
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@700&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap" rel="stylesheet"></link>
      
      <div className="titulo-container">
        <h1 className='titulo'>Olá, meu nome é</h1>
        <h1 className='titulo2'>Marcelo Petroni</h1>
        <h3 className='descricao'>Transformo linhas de código em inovação.</h3>
        <p className='descricao2'>Sou estudante de Ciência da computação, e também,</p>
        <p className='descricao2'>sou aspirante em Desenvolvimento Front-end ツ</p>
      </div>
      <div className="icon-container">
        <h1 className='sombra'>M</h1>
        <h1 className='frontal'>M</h1>
      </div>
    </main>
  )
}

export default main