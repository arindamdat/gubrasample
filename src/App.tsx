import * as React from 'react';
import './App.css';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Gubra</h2>
        </div>
        <p className="App-intro">
         This is a demo page for demonstration purpose only!
        </p>
      </div>
    );
  }
}

export default App;
