import React, { Component } from 'react';

import './App.css';

import { Menu } from './components/Menu/Menu.js';
import { DossierTable } from './components/Dossiers/DossierTable.js';

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
    dossiers: [],
  };
  componentDidMount() {
    this.getDossiers();
  }
  getDossiers = () => {
    fetch('/dossiers')
      .then((res) => res.json())
      .then((dossiers) => this.setState({ dossiers: dossiers }));
  };

  render() {
    if (!this.state.dossiers.length) {
      return <section>Ładowanie...</section>;
    } else {
      return (
        <section>
          <Menu />
          <DossierTable dossiers={this.state.dossiers} />
        </section>
      );
    }
  }
}

export default App;
