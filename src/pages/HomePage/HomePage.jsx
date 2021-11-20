import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.scss';

import Header from '../../components/Header/Header';
import ToReports from '../../components/ToReports/ToReports';
import Balance from '../../components/Balance/Balance';
import Transactions from '../../components/Transactions/Transactions';
import MobileBtnCont from '../../components/shared/MobileBtnCont/MobileBtnCont';
// import Container from '../../components/shared/Container/Container';

function HomePageMarkUp() {
  return (
    <>
      <Header />
      <main className={styles.homePageCont}>
        <div className={styles.homePageMenu}>
          <Link to="/" className={styles.homePageToReports}>
            <ToReports />
          </Link>
          <Balance />
        </div>
        <section className={styles.homePageTransactCont}>
          <Transactions />
        </section>
      </main>
      <footer className={styles.homePageFooter}>
        <MobileBtnCont />
      </footer>
    </>
  );
}

export default HomePageMarkUp;
