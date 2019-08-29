import React from 'react';
import logo from './logo.svg';
import { Button } from './components/Button'
import './App.css';
import { GlobalStyle } from './theme/globalStyle'
import Logo from './components/Logotype'

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <header className="App-header">
        {/*<Logo />*/}
        {/*<Logo type='vertical' />*/}
        <Logo size='small'/>
        {/*<Logo size='small' type='vertical'/>*/}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>Click</Button>
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
