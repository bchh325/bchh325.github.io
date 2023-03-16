import { useRef, useState } from 'react';

import './App.css';

import Information from './components/Information';
import Nav from './components/Nav';
import ParallaxBackground from './components/ParallaxBackground';
import Project from './components/Project';

import projectInfo from './projectInformation';

function App() {

  return (
    <div className="App">
      <div>
        <Nav />
        <ParallaxBackground />
        <Information />
        <div className='projects'>
          <Project obj={projectInfo.one} />
          <Project obj={projectInfo.two} />
          <Project obj={projectInfo.three} />
        </div>
      </div>
    </div>
  );
}

export default App;
