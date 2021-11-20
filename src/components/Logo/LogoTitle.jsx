import React from 'react';
import { ReactComponent as LogoIcon } from '../../assets/logo.svg';
import styles from './Logo.module.scss';

function LogoTitle() {
  return (
    <h1 className={styles.title}>
      <LogoIcon className={styles.iconTitle} />
      <p className={styles.text}>Smart finance</p>
    </h1>
  );
}

export default LogoTitle;
