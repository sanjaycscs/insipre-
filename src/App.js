import logo from './logo.svg';
import './App.css';
import useState from 'react';
function App() {
const[name,setName]=useState('');
  return (
    <div className="App">
      <h1>Welcome to Registration form</h1>
      <form action="#" >
      <div>
        <p>Username:</p>
        <input type="text" placeholder="Username" className="username"></input>
        <p>password:</p>
        <input type="password" placeholder="Password" className="password"></input>
        <p>
          Email:
        </p>
        <input type="text" placeholder="Email" className="email"></input><br></br>
        <button type="submit">Registration</button>
      </div>
      </form>

    </div>
  );
}

export default App;
