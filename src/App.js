import { useRef, useState } from 'react';
import './App.css';
import Information from './components/Information';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const backgroundRef = useRef(null)
  const backgroundImageRef = useRef(null)
  const [hover, setHover] = useState("")
  const [hoverImage, setHoverImage] = useState("")

  const hoverBg = (id) => {
    // const currentRef = backgroundRef.current
    const currentImageRef = backgroundImageRef.current
    // currentRef.dataset.active = id
    currentImageRef.dataset.active = id
  }

  return (
    <div className="App">
      <div className='App-bg-color'></div>
      {/* <div ref={backgroundRef} className={`App-bg ${hover}`}></div> */}
      <div ref={backgroundImageRef} className={`App-imgbg ${hoverImage}`}></div>
      <Nav />
      <div>
        <Information />
        <Skills hoverBg={hoverBg} setHover={setHover} setHoverImage={setHoverImage} />
        <Projects />
        <Information />
        <Information />
      </div>
    </div>
  );
}

export default App;
