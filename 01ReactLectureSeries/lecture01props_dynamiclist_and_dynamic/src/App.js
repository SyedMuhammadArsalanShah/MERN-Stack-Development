import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Message from './components/Message';
import UserCard from './components/UserCard';
import UserList from './components/UserList';
function App() {
  return (
    <div className="App">

      <Header />

      <Message />
      <UserCard name="Saaria" message="Class focus Karen"/>
      <UserCard name="Hiba" message="Off pr hain"/>
      <UserList/>
      
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
