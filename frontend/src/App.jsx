// import { useState } from 'react'

import './App.css'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sports from './components/sports/Sports'
import World from './components/world/World'
import Science from './components/science/Science'
import Footer from "./components/footer/Footer"

import Education from "./components/education/Education"
import Jobs from './components/jobs/Jobs'

function App() {



  return (
    <Router>
      <Navbar />

      <Routes >

      <Route path="/" element={<Home />} />
      <Route path="/world" element={<World />} />
      <Route path="/sports" element={<Sports />} />
      <Route path="/science" element={<Science />} />
      <Route path="/jobs" element={<Jobs />} />
    
      {/* <Route path="/post/:id" element={<PostDetail />} /> */}
      </Routes>

      <Footer />
   
    </Router>
  )
}

export default App
