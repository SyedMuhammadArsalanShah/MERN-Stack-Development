import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import ToggleMessage from './components/ToggleMessage';
import NameForm from './components/NameForm';
import LikeButton from './components/LikeButton';

function App() {
  return (
    <div className="App">

      <h1> Lecture 03 state useState</h1>

      <Counter />
       <ToggleMessage/>
       <NameForm/>
        <LikeButton/>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}
    </div>
  );
}

export default App;
