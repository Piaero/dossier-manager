import React, { useState, useEffect } from 'react';

import { DossierTable } from './DossierTable.js';

export const DossierPage = () => {
  const [dossiers, setDossiers] = useState([]);
  const columns = [
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
  ];

  useEffect(() => {
    fetch('/dossiers')
      .then((res) => res.json())
      .then((data) => setDossiers(data));
  }, [dossiers]);

  const object = {
    _id: {
      $oid: '6050aa416277b5bd4c05f5cb',
    },
    number: 1,
    accountingNumber: 0,
    name: '',
    invoiceStatus: '',
    paymentStatus: '',
    commission: '',
    pax: '',
    dateOfArrival: {
      $date: '2001-02-28T23:00:00.000Z',
    },
    dateOfDeparture: {
      $date: '2001-03-31T22:00:00.000Z',
    },
    cityOfArrival: '',
    cityOfDeparture: '',
    stayDuration: 0,
    transportation: '',
    pilot: '',
    pilotStatus: '',
    responsible: [''],
    dossierStatus: '',
    productType: '',
    notes: '',
    dateCreated: {
      $date: '2000-12-31T23:00:00.000Z',
    },
    dateModified: {
      $date: '2001-01-31T23:00:00.000Z',
    },
    createdBy: '',
    modifiedBy: '',
    snapshots: [''],
  };

  const add = () => {
    console.log(`clicked`);
    console.log(dossiers);
    setDossiers((oldArray) => [...oldArray, object]);
  };

  if (!dossiers.length) {
    return <div>Ładowanie dossiers...</div>;
  } else {
    return (
      <section>
        <button onClick={add}>klik</button>
        <DossierTable data={dossiers} columns={columns} add={add} />
      </section>
    );
  }
};
