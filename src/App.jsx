import { useState } from 'react'
import Titulo from './Titulo'
import './App.css'

function App() {
  
  let nome = 'Enderson Jacson'

  return (
  <div>
    <hr/>
    1 - Componente <Titulo/> <hr/>
    2 - Interpolação -  Nome: {nome} <hr/>
    3 - Props
  </div>)
 
}

export default App
