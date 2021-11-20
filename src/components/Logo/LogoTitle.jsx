import React from 'react';
import styles from './Logo.module.scss';

function LogoTitle() {
  return (
    <div className={styles.title}>
      <h1 className={styles.mainText}>
        Kapu<span className={styles.dollar}>s</span>ta
      </h1>
      <p className={styles.secondaryText}>Smart finance</p>
    </div>
  );
}

export default LogoTitle;
