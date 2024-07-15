import logo from './logo.svg';
import './App.css';

function App() {

  const handleSocialLogin = () => {
    const opened = setTimeout(() => {
      window.open('https://auth.v2.ramper.xyz/wallet/signin')
      if (!opened) alert('please allow popup setting')
    }, 1000);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div onClick={handleSocialLogin}>
          Login
        </div>
      </header>
    </div>
  );
}

export default App;
