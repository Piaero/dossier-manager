import React, { Component } from 'react';

import './App.css';

import { Menu } from './components/Menu/Menu.js';
import { DossierTable } from './components/Dossiers/DossierTable.js';

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

  add = () => {
    console.log('clicked', this.state.data);

    this.setState({
      data: [
        ...this.state.data,
        {
          _id: '6050b9ec4085121d38c26435',
          number: 1,
          accountingNumber: 0,
          name: 'Kuoni 1',
          invoiceStatus: 'proforma',
          paymentStatus: 'zaliczka',
          commission: '0',
          pax: '25-30',
          dateOfArrival: '2001-01-31T23:00:00.000Z',
          dateOfDeparture: '2001-02-28T23:00:00.000Z',
          cityOfArrival: 'Warszawa',
          cityOfDeparture: 'Kraków',
          stayDuration: 0,
          transportation: 'Samolot',
          pilot: 'Monika Kapłon',
          pilotStatus: 'OK',
          responsible: ['Jurek', 'Pierre'],
          dossierStatus: 'Ma szanse',
          productType: 'circuit',
          notes: 'brak uwag',
          dateCreated: '2000-12-31T23:00:00.000Z',
          dateModified: '2001-01-31T23:00:00.000Z',
          createdBy: 'Pierre',
          modifiedBy: 'też Pierre',
          snapshots: [''],
        },
      ],
    });
  };

  render() {
    if (!this.state.data.length) {
      return <section>Ładowanie...</section>;
    } else {
      return (
        <section>
          <button onClick={() => this.add()}>Add dossier</button>
          <Menu />
          <DossierTable data={this.state.data} columns={this.state.columns} />
        </section>
      );
    }
  }
}

export default App;
