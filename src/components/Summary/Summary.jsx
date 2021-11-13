import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

import styles from './Summary.module.scss';

export default function Summary({ summaryData }) {
  return (
    <div className={styles.summaryWrapper}>
      <p className={styles.summaryTitle}>сводка</p>
      <ul className={styles.summaryList}>
        {summaryData.map(el => (
          <li className={styles.summaryItem}>
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
