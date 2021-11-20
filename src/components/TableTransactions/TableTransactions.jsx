import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import EllipsisText from 'react-ellipsis-text';
import { ReactComponent as Delete } from '../../assets/delete.svg';
import { INCOME } from '../../utils/transTypes';
import { deleteTransaction } from '../../services/transactionsAPI';
import { transactionOperations } from '../../redux/transactions';
import EmptyRow from './emptyRow';

import s from './TableTransactions.module.scss';
// eslint-disable-next-line arrow-body-style
const TableTransactions = ({ transactions }) => {
  const dispatch = useDispatch();
  const onDeleteTransaction = async id => {
    await deleteTransaction(id);
    dispatch(transactionOperations.fetchTransactionsList());
  };

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
          <tbody className={s.tableBody}>
            {transactions.map(
              ({ description, amount, category, day, month, year, _id, transactionType }) => (
                <tr key={_id} className={s.row}>
                  <td className={s.date}>
                    {day}.{month}.{year}
                  </td>
                  <td className={s.description}>
                    <EllipsisText tooltip="true" text={description} length={25} />
                  </td>
                  <td className={s.category}>{category}</td>
                  <td className={s.sumContainer}>
                    {transactionType === INCOME ? (
                      <span className={s.income}>
                        {amount.toLocaleString('ru-RU', { minimumFractionDigits: 2 })} грн.
                      </span>
                    ) : (
                      <span className={s.expense}>
                        -{amount.toLocaleString('ru-RU', { minimumFractionDigits: 2 })} грн.
                      </span>
                    )}
                    <button
                      type="button"
                      className={s.buttonDelete}
                      onClick={() => onDeleteTransaction(_id)}
                    >
                      <Delete width="18px" height="18px" className={s.buttonIcon} />
                    </button>
                  </td>
                </tr>
              ),
            )}
            {transactions.length < 9 && <EmptyRow />}
          </tbody>
        </table>
      </div>
    </div>
  );
};

TableTransactions.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TableTransactions;
