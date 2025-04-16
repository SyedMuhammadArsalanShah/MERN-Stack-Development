import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Message from './components/Message';
import UserCard from './components/UserCard';
function App() {
  return (
    <div className="App">

         <Header/>
         <Message/>
         <UserCard name="Hiba Naveeed " message="Bhai mera bhi subject hai uska bhi work karen "/>
         {/* <UserCard name="Saaaria " message="Bhai mera bhi subject hai uska bhi work karen "/> */}


      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
