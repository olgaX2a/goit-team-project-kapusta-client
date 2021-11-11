import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { expensesOperations, expensesSelectors } from '../../redux/expenses';
import { useMemo } from 'react';
import { useTable } from 'react-table';
import { COLUMNS } from './columns';
// import dataFortable from './data.json';
import s from './Table.module.scss';

// const TableForm = ({ transactionType }) => {
//   const columns = useMemo(() => COLUMNS, []);
//   const data = useMemo(() => dataFortable, []);
//   const tableInstance = useTable({
//     columns,
//     data,
//   });
//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
//   return (
//     <table {...getTableProps()} className={s.table}>
//       <thead>
//         {headerGroups.map(headerGroup => (
//           <tr {...headerGroup.getHeaderGroupProps()}>
//             {headerGroup.headers.map(column => (
//               <th {...column.getHeaderProps()} className={s.th}>
//                 {column.render('Header')}
//               </th>
//             ))}
//           </tr>
//         ))}
//       </thead>
//       <thbody {...getTableBodyProps}>
//         {rows.map(row => {
//           prepareRow(row);
//           return (
//             <tr {...row.getRowProps()} className={s.tr}>
//               {row.cells.map(cell => {
//                 return (
//                   <td {...cell.getCellProps()} className={s.td}>
//                     {cell.render('Cell')}
//                   </td>
//                 );
//               })}
//             </tr>
//           );
//         })}
//       </thbody>
//     </table>
//   );

const TableForm = () => {
  const expenses = useSelector(expensesSelectors.getExpenses);

  // const dispatch = useDispatch();
  // const onDeleteOperation = id => dispatch(expensesOperations.deleteExpense(id));
  return (
    <div className={s.scrollTable}>
      <table className={s.table}>
        <thead>
          <tr>
            <th className={s.th}>Дата</th>
            <th className={s.th}>Описание</th>
            <th className={s.th}>Категория</th>
            <th className={s.th}>Сумма</th>
          </tr>
        </thead>
      </table>
      <div className={s.scrollTableBody}>
        <table>
          <tbody>
            {expenses.map(({ description, sum, category, date }) => (
              <tr>
                <td className={s.td}>{date}</td>
                <td className={s.td}>{description}</td>
                <td className={s.td}>{category}</td>
                <td className={s.td}>{sum}</td>
                <td></td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableForm;
