import React from 'react';
import { useHistory } from 'react-router';

import styles from './ArrowToGoBack.module.scss';

const ArrowToGoBack = () => {
  const history = useHistory();
  const handleGoBack = () => {
    history.push('/');
  };
  return (
    <button type="button" className={styles.toGoBackCont} onClick={handleGoBack}>
      <svg width="18" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 5H3.83l3.58-3.59L6 0 0 6l6 6 1.41-1.41L3.83 7H18V5Z" fill="#FF751D" />
      </svg>
      <p className={styles.arrowText}>Вернуться на главную</p>
    </button>
  );
};

export default ArrowToGoBack;
