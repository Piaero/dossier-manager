import React from 'react';
import { useTable, useSortBy } from 'react-table';

import { AddDossier } from './AddDossier.js';
import { DossiersAPI } from './DossiersAPI.js';

export const DossierTable = (props) => {
  const [dane, setDane] = React.useState([]);

  React.useEffect(() => {
    DossiersAPI.getDossiers().then((result) => setDane(result));
  }, []);

  const columns = React.useMemo(() => props.columns, [props.columns]);
  const data = React.useMemo(() => dane, [dane]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);

  const add = (object) => {
    console.log('clicked');
    setDane((oldArray) => [...oldArray, object]);
  };

  return (
    <section>
      <AddDossier columns={columns} add={add} setDane={setDane} />
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
    </section>
  );
};
