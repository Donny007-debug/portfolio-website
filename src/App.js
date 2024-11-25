import React from 'react';
import HomePage from './components/HomePage';
import Contact from './components/Contact';
import NavBar from './components/NavBar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Experience from './components/Experience'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (      
    <Router>
      <div className='app-container'>
        <NavBar />   
        <Routes> 
          <Route path="/"  element = { <HomePage /> } />
          <Route path="/contact" element = { <Contact /> } />
          <Route path="/about" element = { <About /> } />
          <Route path="/Skills" element = { <Skills /> } />
          <Route path="/Projects" element = { <Projects /> } />
          <Route path="/Education" element = { <Education /> } />
          <Route path="/Experience" element = { <Experience /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
