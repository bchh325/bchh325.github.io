import { useRef, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Information from './components/Information';
import Nav from './components/Nav';
import Project from './components/Project';
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

  const url1 = "https://fastly.picsum.photos/id/888/2560/1440.jpg?grayscale&hmac=Wvcaw3SWA-NxJXFez_gGHlPRR31HaE46JJd9Md3OtQs"
  return (
    <div className="App">
      <div className='App-bg-color'></div>
      {/* <div ref={backgroundRef} className={`App-bg ${hover}`}></div> */}
      <div ref={backgroundImageRef} className={`App-imgbg ${hoverImage}`}></div>
      <Nav />
      <div>
        <Information />
        <Skills hoverBg={hoverBg} setHover={setHover} setHoverImage={setHoverImage} />
        <Header imgUrl={"https://fastly.picsum.photos/id/973/2560/1440.jpg?grayscale&hmac=0LbzRYXoWJTDpq-T-_2pOhk5648COIVEadPPxhJTqog"} />
        <Project swap={true} />
        <Header imgUrl={url1} />
        <Project />
        <Header imgUrl={"https://fastly.picsum.photos/id/355/2560/1440.jpg?grayscale&hmac=seui_2O7c0fIvFFHOhepynWHHGM-8OSC4Zrvzg3tL1c"} />
        <Project swap={true} />
        <Header imgUrl={"https://fastly.picsum.photos/id/846/2560/1440.jpg?grayscale&hmac=uS484d2bN0352afeHdqNmKfZNZDbGArHgxaJ29lUX4Q"} />
        <Project />
        <Information />
        <Information />
      </div>
    </div>
  );
}

export default App;
