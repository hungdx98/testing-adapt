import logo from './logo.svg';
import './App.css';

function App() {

  const openPopupWindow = (url, { title, ...customOptions }) => {
    return window.open(url, title, optionToString({ ...defaultOptions, ...customOptions }))
  }

  const handleSocialLogin = () => {
    openPopupWindow(
      `https://auth.v2.ramper.xyz/transaction/send-token?${new URLSearchParams({
        from: '0x835d5e132039987A994c6288777DbF7d1Bb511A5',
        to: '0x835d5e132039987A994c6288777DbF7d1Bb511A5',
        symbol: 'VIC',
        //@ts-ignore
        denom: '',
        //@ts-ignore
        coingeckoId: '0',
        decimal: String(0),
        amount: 0
      })}`,
      {
        title: `App Request-${String(Math.random()).slice(-2)}`,
        height: 650,
        width: 400
      }
    )
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
