import React, { Component } from 'react';

import './App.css';

import { Menu } from './components/Menu/Menu.js';
import { DossierTable } from './components/Dossiers/DossierTable.js';
import { DossierPage } from './components/Dossiers/DossierPage.js';

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
    data: [],
    columns: [
      {
        Header: 'LP',
        accessor: 'number',
      },
      {
        Header: 'NRJ',
        accessor: 'accountingNumber',
      },
      {
        Header: 'nazwa',
        accessor: 'name',
      },
      {
        Header: 'Faktura',
        accessor: 'invoiceStatus',
      },
      {
        Header: 'Płatność',
        accessor: 'paymentStatus',
      },
      {
        Header: 'Prowizja',
        accessor: 'commission',
      },
      {
        Header: 'L. osób',
        accessor: 'pax',
      },
      {
        Header: 'Przyjazd',
        accessor: 'dateOfArrival',
      },
      {
        Header: 'Wyjazd',
        accessor: 'dateOfDeparture',
      },
      {
        Header: 'Przyjazd (miasto)',
        accessor: 'cityOfArrival',
      },
      {
        Header: 'Wyjazd (miasto)',
        accessor: 'cityOfDeparture',
      },
      {
        Header: 'Czas pobytu',
        accessor: 'stayDuration',
      },
      {
        Header: 'Transport',
        accessor: 'transportation',
      },
      {
        Header: 'Pilot',
        accessor: 'pilot',
      },
      {
        Header: 'Pilot - Stan',
        accessor: 'pilotStatus',
      },
      {
        Header: 'Odpowiedzialny',
        accessor: 'responsible',
      },
      {
        Header: 'Stan grupy',
        accessor: 'groupStatus',
      },
      {
        Header: 'Typ produktu',
        accessor: 'productType',
      },
      {
        Header: 'Uwagi',
        accessor: 'notes',
      },
      {
        Header: 'Data utworzenia',
        accessor: 'dateCreated',
      },
      {
        Header: 'Data modyfikacji',
        accessor: 'dateModified',
      },
      {
        Header: 'Stworzono przez',
        accessor: 'createdBy',
      },
      {
        Header: 'Zmodyfikowano przez',
        accessor: 'modifiedBy',
      },
    ],
  };
  componentDidMount() {
    this.getDossiers();
  }
  getDossiers = () => {
    fetch('/dossiers')
      .then((res) => res.json())
      .then((data) => this.setState({ data: data }));
  };

  render() {
    if (!this.state.data.length) {
      return <section>Ładowanie...</section>;
    } else {
      return (
        <section>
          <Menu />
          <DossierPage />
          {/* <DossierTable data={this.state.data} columns={this.state.columns} /> */}
        </section>
      );
    }
  }
}

export default App;
