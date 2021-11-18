import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { fetchTransaction } from '../../services/summaryApi';

import styles from './Summary.module.scss';

export default function Summary({ summaryData }) {
  const [summaryArr, setSummaryArr] = useState(null);

  useEffect(() => {
    if (summaryArr) return;
    fetchTransaction().then(res => setSummaryArr(res));
    console.log(summaryArr);
  }, [summaryArr]);
  console.log(summaryArr);
  return (
    <div className={styles.summaryWrapper}>
      <p className={styles.summaryTitle}>сводка</p>
      <ul className={styles.summaryList}>
        {summaryArr &&
          summaryArr.map(el => (
            <li className={styles.summaryItem} key={el.key}>
              <span className={styles.summaryMonth}>{el.reportMonth}</span>
              <span className={styles.summarySum}>
                <NumberFormat
                  thousandsGroupStyle="thousand"
                  decimalScale={2}
                  type="text"
                  value={el.totalResultAmount}
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
