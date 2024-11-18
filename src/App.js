import React from 'react';
import HomePage from './components/HomePage';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
    return (
        <div>
            <HomePage />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
};

export default App;
