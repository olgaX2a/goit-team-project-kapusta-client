import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { fetchTransaction } from '../../services/summaryApi';
import { getFormattedMonth } from '../../utils/getFormattedMonth';
import styles from './Summary.module.scss';

export default function Summary({ typeTransaction }) {
  const [summaryArr, setSummaryArr] = useState([]);
  useEffect(() => {
    fetchTransaction(typeTransaction).then(res => {
      console.log(res);
      setSummaryArr(getFormattedMonth(res));
    });
  }, []);
  return (
    <div className={styles.summaryWrapper}>
      <p className={styles.summaryTitle}>сводка</p>
      <ul className={styles.summaryList}>
        {summaryArr?.map(el => (
          <li className={styles.summaryItem} key={el.id}>
            <span className={styles.summaryMonth}> </span>
            <span className={styles.summarySum}>
              <NumberFormat
                thousandsGroupStyle="thousand"
                decimalScale={2}
                type="text"
                value=""
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
  typeTransaction: PropTypes.string.isRequired,
};

// summaryArr?.map(el => (
//           <li className={styles.summaryItem} key={nanoid()}>
//             <span className={styles.summaryMonth}>{el.reportMonth}</span>
//             <span className={styles.summarySum}>
//               <NumberFormat
//                 thousandsGroupStyle="thousand"
//                 decimalScale={2}
//                 type="text"
//                 value={el.totalResultAmount}
//                 displayType="text"
//                 allowNegative
//                 thousandSeparator={' '}
//                 fixedDecimalScale
//                 allowEmptyFormatting={false}
//               />
//             </span>
//           </li>
//         ))
