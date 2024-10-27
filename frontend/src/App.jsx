// import { useState } from 'react'

import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/navbar/Navbar'

import Sports from './components/sports/Sports'
import World from './components/world/World'
import Science from './components/science/Science'
import Footer from "./components/footer/Footer"

function App() {


  return (
    <>
   <Navbar />
   <Home />
   <Sports />
     <World />
    <Science />
    <Footer />
  
    
    </>
  )
}

export default App
