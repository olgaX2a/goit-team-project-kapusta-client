import React from 'react';
import PropTypes from 'prop-types';
import EllipsisText from 'react-ellipsis-text';
import { ReactComponent as Delete } from '../../assets/delete.svg';
import { INCOME } from '../../utils/transTypes';
import EmptyRow from './emptyRow';

import s from './TableTransactions.module.scss';

// eslint-disable-next-line arrow-body-style
const TableTransactions = ({ transactions }) => {
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
        {transactions.map(({ description, sum, category, date, id, transactionType }) => (
          <tr key={id} className={s.row}>
            <td className={s.date}>{date}</td>
            <td className={s.description}>
              <EllipsisText text={description} length={30} />
            </td>
            <td className={s.category}>{category}</td>
            <td className={s.sum}>
              {transactionType === INCOME ? (
                <span className={s.income}> {sum.toLocaleString('ru')} грн.</span>
              ) : (
                <span className={s.expense}>-{sum.toLocaleString('ru')} грн.</span>
              )}
              <button
                type="button"
                className={s.buttonDelete}
                onClick={() => console.log('need delete transaction')}
              >
                <Delete width="18px" height="18px" className={s.buttonIcon} />
              </button>
            </td>
          </tr>
        ))}
        {transactions.length < 9 && <EmptyRow />}
      </tbody>
    </table>
  );
};

TableTransactions.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default TableTransactions;
