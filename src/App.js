import logo from './logo.svg';
import gatorLogo from './gator.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={gatorLogo} className="App-logo" alt="logo" />
        <p>
          My name is Natasha and this is our team project.
        </p>	
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World! This is our team project.
        </p>	
        <p> Hello World! </p>
      </header>
    </div>
  );
}

export default App;
