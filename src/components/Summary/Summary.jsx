import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { fetchTransaction } from '../../services/summaryApi';
import { getFormattedMonth } from '../../utils/getFormattedMonth';
import styles from './Summary.module.scss';

const fetchTransactionType = ['expense', 'income'];
export default function Summary({ handelTab }) {
  const [summaryArr, setSummaryArr] = useState([]);
  //  можно уличшить если будет время
  useEffect(() => {
    switch (handelTab) {
      case 0:
        fetchTransaction(fetchTransactionType[0]).then(res => {
          setSummaryArr(getFormattedMonth(res));
        });
        break;
      case 1:
        fetchTransaction(fetchTransactionType[1]).then(res => {
          setSummaryArr(getFormattedMonth(res));
        });
        break;
      default:
        fetchTransaction(fetchTransactionType[0]).then(res => {
          setSummaryArr(getFormattedMonth(res));
        });
        break;
    }
  }, [handelTab]);
  return (
    <div className={styles.summaryWrapper}>
      <p className={styles.summaryTitle}>сводка</p>
      <ul className={styles.summaryList}>
        {summaryArr?.map(el => (
          <li className={styles.summaryItem} key={el.id}>
            <span className={styles.summaryMonth}>{el.month}</span>
            <span className={styles.summarySum}>
              <NumberFormat
                thousandsGroupStyle="thousand"
                decimalScale={2}
                type="text"
                value={el.total}
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
  handelTab: PropTypes.number.isRequired,
};
