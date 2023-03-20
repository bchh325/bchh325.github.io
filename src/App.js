import { useRef, useState } from 'react';

import './App.css';

import Information from './components/Information';
import Nav from './components/Nav';
import ParallaxBackground from './components/ParallaxBackground';
import Project from './components/Project';

import projectInfo from './projectInformation';

function App() {
  const aboutRef = useRef(null)
  const projectRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <div className="App">
      <Nav refs={{ aboutRef, projectRef, contactRef }} />
      <ParallaxBackground />
      <div ref={aboutRef} className='about'>
        <Information />
      </div>
      <div ref={projectRef} className='projects'>
        <Project obj={projectInfo.one} />
        <Project obj={projectInfo.two} />
        <Project obj={projectInfo.three} />
      </div>
      <div ref={contactRef} className='contact'>
        contact stuff
      </div>
    </div>
  );
}

export default App;
