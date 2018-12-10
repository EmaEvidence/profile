import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Index from './components/Index'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Index />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
