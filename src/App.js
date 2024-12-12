import React from 'react';
import HomePage from './components/js/HomePage';
import Contact from './components/js/Contact';
import NavBar from './components/js/NavBar'
import About from './components/js/About'
import Skills from './components/js/Skills'
import Projects from './components/js/Projects'
import Education from './components/js/Education'
import Experience from './components/js/Experience'
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
