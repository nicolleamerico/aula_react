import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Acesse o meu linkedin!
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/nicolle-americo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Clique Aqui!
        </a>
      </header>
    </div>
  );
}

export default App;
