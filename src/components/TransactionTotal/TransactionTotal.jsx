import React from 'react';
import PropTypes from 'prop-types';
import Paper from '../shared/Paper/Paper';
import { normalizeSum } from '../../utils/normalize';
import styles from './TransactionTotal.module.scss';

function TransactionTotal({ expense, income }) {
  return (
    <Paper extraStyles={styles.paper}>
      <p>
        <span>Расходы:</span>
        <span className={styles.expense}>{`- ${normalizeSum(expense)} грн.`}</span>
      </p>

      <p>
        <span>Доходы:</span>
        <span className={styles.income}>{`+ ${normalizeSum(income)} грн.`}</span>
      </p>
    </Paper>
  );
}

export default TransactionTotal;

TransactionTotal.propTypes = {
  expense: PropTypes.number.isRequired,
  income: PropTypes.number.isRequired,
};
