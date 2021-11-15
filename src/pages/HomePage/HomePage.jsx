import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.scss';

import Header from '../../components/Header/Header';
import ToReports from '../../components/ToReports/ToReports';
import Balance from '../../components/Balance/Balance';
import Transactions from '../../components/Transactions/Transactions';
import Summary from '../../components/Summary/Summary';
// import Container from '../../components/shared/Container/Container';

const testSummary = [
  { key: 1, month: 'january', sum: 20475 },
  { key: 2, month: 'february', sum: 48567 },
  { key: 3, month: 'march', sum: 34665 },
  { key: 4, month: 'april', sum: 9635 },
  { key: 5, month: 'may', sum: 788366 },
  { key: 6, month: 'june', sum: 34569 },
];

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
          <div className={styles.homePageSummary}>
            <Summary summaryData={testSummary} />
          </div>
        </section>
      </main>
      <footer className={styles.homePageFooter} />
    </>

    // <ul className={styles.tabCont}>
    //         <li className={styles.tab}>
    //           <Link to="/" className={styles.expences}>
    //             Расход
    //           </Link>
    //         </li>
    //         <li className={styles.tab}>
    //           <Link to="/" className={styles.income}>
    //             Доход
    //           </Link>
    //         </li>
    //       </ul>
    // other code
    // <div className={styles.mainPageBgr}>
    //   <header className={styles.logoCont}>
    //     <Logo className={styles.logoCont} />
    //   </header>
    //   <main className={styles.mainPageTitleCont}>
    //     <h1 className={styles.mainPageTitle}>
    //       Kapu<span className={styles.dollar}>s</span>ta
    //     </h1>
    //     <p className={styles.mainPageTitleText}> Smart finance</p>
    //   </main>
    //   <footer className={styles.mainPageFooter} />
    //   <div className={styles.mainPageAuth}>
    //     <LoginForm />
    //   </div>
    // </div>
  );
}

export default HomePageMarkUp;
