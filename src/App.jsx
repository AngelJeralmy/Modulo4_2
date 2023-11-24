import { useState } from 'react'
import './App.css'
import Registro from './Components.jsx/Registro'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'


function App() {

  const [mensaje, setMensaje]=useState("");
  const [color, setColor]=useState("");

  return (
    <>
      <Card className='card1'>
        <h4>
          CREA UNA CUENTA
        </h4>
        <Registro mensaje={mensaje} setMensaje={setMensaje} setColor={setColor} color={color}/>
      </Card>
    </>
  )
}

export default App
