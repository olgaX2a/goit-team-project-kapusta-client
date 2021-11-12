import React from 'react';
import styles from './Summary.module.scss';

export default function Summary() {
  return (
    <div className={styles.summaryWrapper}>
      <p className={styles.summaryTitle}>сводка</p>
      <ul className={styles.summaryList}>
        <li className={styles.summaryItem}>
          <span className={styles.summaryMonth}>june</span>
          <span className={styles.summarySum}>10000.00</span>
        </li>
        <li className={styles.summaryItem}>
          <span className={styles.summaryMonth}>august</span>
          <span className={styles.summarySum}>10000.00</span>
        </li>
      </ul>
    </div>
  );
}
