import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: 'BROH', lastName: 'Brohameth'},
      company: 'Jabrony inc.'
    }
  }


  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
              Sup {this.state.name.firstName} {this.state.name.lastName}, why you working at {this.state.company}?
          </p>
          <button onClick={() => {
            this.setState({name: { firstName: 'Brother', lastName: 'Bro'}})
          }}
          >
          Change Name</button>
        </header>
      </div>
    );
  }
}

export default App;
