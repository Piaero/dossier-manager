import React, { Component } from 'react';

import './App.css';

import { Menu } from './components/Menu/Menu.js';
import { DossierPage } from './components/Dossiers/DossierPage.js';

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };

  render() {
    return (
      <section>
        <Menu />
        <DossierPage />
      </section>
    );
  }
}

export default App;
