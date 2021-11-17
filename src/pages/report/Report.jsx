import React from 'react';
import styles from './Report.module.scss';
import Header from '../../components/Header/Header';
import ArrowToGoBack from '../../components/shared/ArrowToGoBack/ArrowToGoBack';
import Balance from '../../components/Balance/Balance';
// import Container from '../../components/shared/Container/Container';

function Report() {
  return (
    <>
      <Header />
      <main className={styles.reportPageTitleCont}>
        <ArrowToGoBack />
        <Balance />
      </main>
      <footer className={styles.reportPageFooter} />
    </>
  );
}

export default Report;
