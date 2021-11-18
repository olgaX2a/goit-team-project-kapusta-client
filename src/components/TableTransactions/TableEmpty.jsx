import React from 'react';
import EmptyRow from './emptyRow';
import s from './TableTransactions.module.scss';

// eslint-disable-next-line arrow-body-style
const TableEmpty = () => {
  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th className={s.date}>Дата</th>
          <th className={s.description}>Описание</th>
          <th className={s.category}>Категория</th>
          <th className={s.sum}>Сумма</th>
        </tr>
      </thead>

      <tbody className={s.tableBody}>
        <tr className={s.row}>
          <td className={s.date} />
          <td className={s.description} />
          <td className={s.category} />
          <td className={s.sumContainer} />
        </tr>

        <EmptyRow />
      </tbody>
    </table>
  );
};

export default TableEmpty;
