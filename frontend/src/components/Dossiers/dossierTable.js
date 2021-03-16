import React from 'react';
import { useTable } from 'react-table';

export const DossierTable = ({ dossiers }) => {
  const data = React.useMemo(() => dossiers, []);
  const columns = React.useMemo(
    () => [
      {
        Header: 'LP',
        accessor: 'number',
      },
      {
        Header: 'NRJ',
        accessor: 'accountingNumber',
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
    []
  );
  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <div>
      DossiersTable <br /> <br />
      {JSON.stringify(dossiers)}
      <br /> <br />
      <table {...getTableProps()}>
        <caption>Table 1</caption>
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
            <th>Header 4</th>
            <th>Header 5</th>
            <th>Header 6</th>
            <th>Header 7</th>
            <th>Header 8</th>
            <th>Header 9</th>
            <th>Header 10</th>
            <th>Header 11</th>
            <th>Header 12</th>
            <th>Header 13</th>
            <th>Header 14</th>
            <th>Header 15</th>
            <th>Header 16</th>
            <th>Header 17</th>
            <th>Header 18</th>
            <th>Header 19</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
