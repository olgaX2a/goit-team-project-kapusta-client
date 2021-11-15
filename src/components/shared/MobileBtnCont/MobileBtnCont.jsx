import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MobileBtnCont.module.scss';

const MobileBtnCont = () => (
  <ul className={styles.btnCont}>
    <li className={styles.btnItem}>
      <Link to="/" className={styles.btn}>
        Расход
      </Link>
    </li>
    <li className={styles.btnItem}>
      <Link to="/" className={styles.btn}>
        Доход
      </Link>
    </li>
  </ul>
);

export default MobileBtnCont;
