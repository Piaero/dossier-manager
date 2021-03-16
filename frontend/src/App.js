import React, { Component } from 'react';

import './App.css';

import { Menu } from './components/Menu/Menu.js';
import { DossierRow } from './components/Dossiers/DossierRow.js';

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
        <DossierRow />
      </section>
    );
  }
}

export default App;
