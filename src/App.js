import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">React Nanodegree - Coding Practice by Udacity</h1>
    </header>

    <ChatWindow />
  </div>
);

export default App;
