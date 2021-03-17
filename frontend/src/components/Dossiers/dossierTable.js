import React from 'react';
import { useTable } from 'react-table';

import { DossierAdd } from './DossierAdd.js';

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
      <DossierAdd columns={columns} />
      DossiersTable
      <table {...getTableProps()}>
        <caption>Dossiers: </caption>

        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <th {...column.getHeaderProps()}>
                      {
                        // Render the header
                        column.render('Header')
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rows.map((row) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return (
                        <td {...cell.getCellProps()}>
                          {
                            // Render the cell contents
                            cell.render('Cell')
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};
