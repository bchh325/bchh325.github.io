import { useRef, useState } from 'react';
import './App.css';
import Information from './components/Information';
import Nav from './components/Nav';
import ParallaxBackground from './components/ParallaxBackground';
import Project from './components/Project';

function App() {

  return (
    <div className="App">
      <div>
        <Nav />
        <ParallaxBackground />
        <Information />
        <div className='projects'>
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </div>
  );
}

export default App;
