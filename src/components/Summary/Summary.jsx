import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { fetchTransaction } from '../../services/summaryApi';

import styles from './Summary.module.scss';
import { summaryOperations, summarySelectors } from '../../redux/transactionSummary';

export default function Summary({ summaryData }) {
  const dispatch = useDispatch();

  const summary = useSelector(summarySelectors.getSummary);
  const isLoading = useSelector(summarySelectors.getSummaryIsLoading);

  useEffect(() => {
    dispatch(summaryOperations.getByMonth());
  }, [dispatch]);

  return (
    <div className={styles.summaryWrapper}>
      <p className={styles.summaryTitle}>сводка</p>
      <ul className={styles.summaryList}>
        {summaryData.map(el => (
          <li className={styles.summaryItem} key={el.key}>
            <span className={styles.summaryMonth}>{el.month}</span>
            <span className={styles.summarySum}>
              <NumberFormat
                thousandsGroupStyle="thousand"
                decimalScale={2}
                type="text"
                value={el.sum}
                displayType="text"
                allowNegative
                thousandSeparator={' '}
                fixedDecimalScale
                allowEmptyFormatting={false}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

Summary.propTypes = {
  summaryData: PropTypes.arrayOf(PropTypes.object).isRequired,
};
