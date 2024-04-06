import logo from './logo.svg';
import './App.css';
import Arreglos from './Arreglos';
import ListaElementos from './LisataElementos';
import TextoCondicional from './TextoCondicional';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Arreglos/>
<ListaElementos/>
<TextoCondicional/>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          Learn React
      </a>
      </header>
    </div>
  );
}

export default App;
