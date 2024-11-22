import React from 'react';
import HomePage from './components/HomePage';
import Contact from './components/Contact';
import NavBar from './components/NavBar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (      
    <Router>
        <NavBar />   
      <Routes> 
        <Route path="/"  element = { <HomePage /> } />
        <Route path="/contact" element = { <Contact /> } />
        <Route path="/about" element = { <About /> } />
        <Route path="/Skills" element = { <Skills /> } />
        <Route path="/Projects" element = { <Projects /> } />
      </Routes>
    </Router>
  );
}

export default App;
