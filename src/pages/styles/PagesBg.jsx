import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Pages.module.scss';

function PagesBg() {
  const location = useLocation();
  const isLoginOrRegister = location.pathname === '/login' || location.pathname === '/register';
  const isReport = location.pathname === '/reports';
  const isHome = location.pathname === '/';

  return (
    <div className={styles.bg}>
      {isLoginOrRegister && (
        <>
          <div className={`${styles.grey} ${styles.register}`} />
          <div className={`${styles.kapusta} ${styles.register}`} />
        </>
      )}
      {isReport && (
        <>
          <div className={styles.grey} />
          <div className={`${styles.kapusta} ${styles.report}`} />
        </>
      )}
      {isHome && (
        <>
          <div className={styles.grey} />
          <div className={styles.kapusta} />
        </>
      )}
    </div>
  );
}

export default PagesBg;

// TODO: styles for register & login page
