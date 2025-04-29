import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import LoginForm from "./components/LoginForm"
import SurahList from './components/SurahList';

function App() {
  const [isLogin, setLogin] = useState(false);
  const [useremail, setuserEmail] = useState(" ")
  const handleLogin = (email) => {
    setLogin(true);
    setuserEmail(email)
  }


  return (
    <div className="App">

      <div style={{ textAlign: "Center" }}>


        <h1> Lecture 04 | Login Form  </h1>
        {
          isLogin ? (

            <>
              <h2>welcome ,{useremail} 👋 </h2>

              <SurahList />

            </>
          ) : (<LoginForm onLogin={handleLogin} />)


        }






      </div>
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
