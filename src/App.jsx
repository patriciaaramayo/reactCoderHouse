import React from 'react'
import "./App.css"
import Cuerpo from './components/Cuerpo/Cuerpo'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <>
    <NavBar/>
    <Cuerpo/>
    </>
  )
}

export default App;