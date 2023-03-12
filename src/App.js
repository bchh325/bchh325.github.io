import { useRef, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Information from './components/Information';
import Nav from './components/Nav';
import Project from './components/Project';
import ParallaxBackground from './components/ParallaxBackground';
import { Parallax } from 'react-scroll-parallax';

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

  // const url1 = "https://fastly.picsum.photos/id/888/2560/1440.jpg?grayscale&hmac=Wvcaw3SWA-NxJXFez_gGHlPRR31HaE46JJd9Md3OtQs"
  const url1 = "https://picsum.photos/2560/1440"
  const url2 = "https://picsum.photos/2561/1440"
  const url3 = "https://picsum.photos/2562/1440"
  const url4 = "https://picsum.photos/2563/1440"
  return (
    <div className="App">

      <div className='App-bg-color'></div>
      {/* <div ref={backgroundRef} className={`App-bg ${hover}`}></div> */}
      <div ref={backgroundImageRef} className={`App-imgbg ${hoverImage}`}></div>
      <div>
        <Nav />
        <ParallaxBackground />
        <Information />
        {/* <Skills hoverBg={hoverBg} setHover={setHover} setHoverImage={setHoverImage} /> */}
        <Header swap={true} imgUrl={url1} />
        <Project swap={true} />
        <Header imgUrl={url2} />
        <Project />
        <Header swap={true} imgUrl={url3} />
        <Project swap={true} />
        <Header imgUrl={url4} />
        <Project />
        <Information />
        <Information />
      </div>
    </div>
  );
}

export default App;
