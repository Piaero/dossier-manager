import React, { Component } from 'react';

import './App.css';

import { Menu } from './components/Menu/Menu.js';

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };

  render() {
    return <Menu />;
  }
}

export default App;
