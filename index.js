import React, { Component } from 'react';
import { render } from 'react-dom';
import Section1 from './Section1';
import './style.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h3>My Information</h3>
        <Section1/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
