import React, { useState, useEffect, useMemo } from 'react';
import { useTable } from 'react-table';

import { AddDossier } from './AddDossier.js';
import { DossiersAPI } from './DossiersAPI.js';

export const DossierTable = () => {
  const [dossiers, setDossiers] = useState([]);

  useEffect(() => {
    DossiersAPI.getDossiers().then((result) => setDossiers(result));
  }, []);

  const columns = useMemo(
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
    []
  );
  const data = useMemo(() => dossiers, [dossiers]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <section>
      <AddDossier columns={columns} setDossiers={setDossiers} />
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
    </section>
  );
};
