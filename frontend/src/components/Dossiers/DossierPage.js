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

  //   const add = (object) => {
  //     console.log(`clicked function in DossierPage`);
  //     setDossiers((oldArray) => [...oldArray, object]);
  //   };

  if (dossiers.length) {
    return <div>Ładowanie dossiers...</div>;
  } else {
    return (
      <section>
        {/* <button onClick={add}>klik</button> */}
        <DossierTable
          data={dossiers}
          columns={columns}
          // add={add}
        />
      </section>
    );
  }
};
