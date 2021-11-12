import React from 'react';
import PropTypes from 'prop-types';
import EllipsisText from 'react-ellipsis-text';
import { ReactComponent as Delete } from '../../assets/delete.svg';
import EmptyRow from './emptyRow';

import s from './TableTransactions.module.scss';

// eslint-disable-next-line arrow-body-style
const TableTransactions = ({ transactions }) => {
  return (
    <div className={s.scrollTable}>
      <table>
        <thead>
          <tr>
            <th className={s.date}>Дата</th>
            <th className={s.description}>Описание</th>
            <th className={s.category}>Категория</th>
            <th className={s.sum}>Сумма</th>
          </tr>
        </thead>
      </table>
      <div className={s.scrollTableBody}>
        <table>
          <tbody>
            {transactions.map(({ description, sum, category, date, id }) => (
              <tr key={id}>
                <td className={s.date}>{date}</td>
                <td className={s.description}>
                  <EllipsisText text={description} length="30" />
                </td>
                <td className={s.category}>{category}</td>
                <td className={s.sum}>
                  {sum}
                  <button type="button" className={s.buttonDelete}>
                    <Delete width="18px" height="18px" className={s.buttonIcon} />
                  </button>
                </td>
              </tr>
            ))}
            {transactions.length < 9 && <EmptyRow />}
          </tbody>
        </table>
      </div>
    </div>
  );
};

TableTransactions.propTypes = {
  transactions: PropTypes.node.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  id: PropTypes.number.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  date: PropTypes.string.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  description: PropTypes.string.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  category: PropTypes.string.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  sum: PropTypes.number.isRequired,
};
export default TableTransactions;
