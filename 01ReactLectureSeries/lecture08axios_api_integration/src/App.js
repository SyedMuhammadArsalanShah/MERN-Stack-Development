import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <div className="App">
     <h1> New API Pacakage Axios</h1>
     <ChatBot/>
     <UserList/>
    </div>
  );
}

export default App;
