import * as React from 'react';
import './App.css';
import Hello, {getExclamationMarks} from './Components/Hello';

const logo = require('./assets/images/logo.svg');

class App extends React.Component<{}, null> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React RR</h2>
        </div>
        <div className="App-intro">
          <code>{getExclamationMarks(5)}</code>
          <Hello name={'dognose'} enthusiasmLevel={5} />
        </div>
        <div className="effects" />
      </div>
    );
  }
}

export default App;
