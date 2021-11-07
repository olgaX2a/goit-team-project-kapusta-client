import { useTable } from 'react-table';
const Table = () => {
  const columns = [
    {
      Header: 'Дата',
      accessor: 'date',
    },
    {
      Header: 'Описание',
      accessor: 'discription',
    },
    {
      Header: 'Категория',
      accessor: 'category',
    },

    {
      Header: 'Сумма',
      accessor: 'sum',
    },
  ];

  const data = [
    {
      date: '',
      discription: '',
      category: '',
      sum: '',
    },
  ];
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
