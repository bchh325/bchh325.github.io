import './App.css';
import Information from './components/Information';
import Nav from './components/Nav';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Nav />
      <div>
        <Information />
        <Skills />
        <Information />
        <Information />
        <Information />
      </div>
    </div>
  );
}

export default App;
