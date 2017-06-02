//@flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const HelloWorldContainer = styled.div`
	color: blue;
	font-size: 15px;
	font-weight: 400;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <HelloWorldContainer>Hello world!</HelloWorldContainer>
        </p>
      </div>
    );
  }
}

export default App;
