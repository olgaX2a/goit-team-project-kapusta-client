import React from 'react';
import { useDispatch } from 'react-redux';
import EllipsisText from 'react-ellipsis-text';
import PropTypes from 'prop-types';
import { ReactComponent as Delete } from '../../assets/delete.svg';
import { INCOME } from '../../utils/transTypes';
import { normalizeSum } from '../../utils/normalize';
import { transactionOperations } from '../../redux/transactions';
import s from './MobileTable.module.scss';

// eslint-disable-next-line arrow-body-style
const MobileTable = ({ transactions }) => {
  const dispatch = useDispatch();
  const onDeleteTransaction = id => dispatch(transactionOperations.deleteTransaction(id));
  return (
    <ul className={s.list}>
      {transactions.map(
        ({ description, amount, category, day, month, year, _id, transactionType }) => (
          <li key={_id} className={s.item}>
            <div className={s.descContainer}>
              <p className={s.description}>
                <EllipsisText text={description} length={30} />
              </p>
              <div className={s.categoryContainer}>
                <p className={s.date}>
                  {day}.{month}.{year}
                </p>
                <p>{category}</p>
              </div>
            </div>

            <p className={s.sumContainer}>
              {transactionType === INCOME ? (
                <span className={s.income}>{normalizeSum(amount)} грн.</span>
              ) : (
                <span className={s.expense}>-{normalizeSum(amount)} грн.</span>
              )}

              <button
                type="button"
                className={s.buttonDelete}
                onClick={() => onDeleteTransaction(_id)}
              >
                <Delete width="18px" height="18px" className={s.buttonIcon} />
              </button>
            </p>
          </li>
        ),
      )}
    </ul>
  );
};
MobileTable.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MobileTable;
