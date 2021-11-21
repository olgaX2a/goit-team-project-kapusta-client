import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './MobileBtnCont.module.scss';

const MobileBtnCont = ({ handelBtn }) => (
  <div>
    <ul className={styles.btnCont}>
      <li className={styles.btnItem}>
        <Link to="/" className={styles.btn} data-type="expense" onClick={handelBtn}>
          Расход
        </Link>
      </li>
      <li className={styles.btnItem}>
        <Link to="/" className={styles.btn} data-type="income" onClick={handelBtn}>
          Доход
        </Link>
      </li>
    </ul>
  </div>
);

MobileBtnCont.propType = {
  handelBtn: PropTypes.func.isRequired,
};

export default MobileBtnCont;
