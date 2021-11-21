import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.scss';
import PagesBg from '../styles/PagesBg';
import Header from '../../components/Header/Header';
import ToReports from '../../components/ToReports/ToReports';
import Balance from '../../components/Balance/Balance';
import Transactions from '../../components/Transactions/Transactions';
import MobileBtnCont from '../../components/shared/MobileBtnCont/MobileBtnCont';
import Container from '../../components/shared/Container/Container';
import MobileTable from '../../components/MobileTable/MobileTable';
import transactionSelectors from '../../redux/transactions/transactions-selector';
import { useMediaQuery } from '../../components/hooks/useMediaQuery';
import Summary from '../../components/Summary/Summary';
import CalendarPicker from '../../components/shared/Calendar/CalendarPicker';

function HomePageMarkUp() {
  const [date, setDate] = useState(new Date());
  const transactions = useSelector(transactionSelectors.getTransactions);
  const isMatches = useMediaQuery('(min-width: 768px)');

  const handleDateSelection = day => {
    setDate(day);
  };

  return (
    <>
      <Header />
      <PagesBg />
      <main className={styles.main}>
        <Container>
          <div className={styles.homePageMenu}>
            <Link to="/" className={styles.homePageToReports}>
              <ToReports />
            </Link>
            <Balance />
            {!isMatches && (
              <div className={styles.calendar}>
                <CalendarPicker onSelect={handleDateSelection} />
              </div>
            )}
          </div>
          {isMatches && (
            <section className={styles.homePageTransactCont}>
              <Transactions />
            </section>
          )}
          {!isMatches && (
            <div className={styles.mobileTableWrapper}>
              <MobileTable transactions={transactions} />
            </div>
          )}
        </Container>
      </main>
      <div className={styles.mobileBtn}>
        <MobileBtnCont />
      </div>
    </>
  );
}

export default HomePageMarkUp;
