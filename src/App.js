import { useRef, useState } from 'react';
import './App.css';
import Information from './components/Information';
import Nav from './components/Nav';
import ParallaxBackground from './components/ParallaxBackground';

function App() {

  return (
    <div className="App">
      <div>
        <Nav />
        <ParallaxBackground />
        <Information />
      </div>
    </div>
  );
}

export default App;
