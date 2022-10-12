import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Message />
      <Counter />
      {/* <Greet name='Bruce' heroName='Batman'>
        <p>Give me all of your money</p>
        <button>click me</button>
      </Greet>
      <Welcome name='Bagas' heroName='Superman'/>
      <Hello/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bagaskoro Saputro
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
