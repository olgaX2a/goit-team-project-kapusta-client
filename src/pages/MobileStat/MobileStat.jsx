import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactComponent as Calendar } from '../../assets/calendar.svg';
import styles from './MobileStat.module.scss';

import Header from '../../components/Header/Header';
import ToReports from '../../components/ToReports/ToReports';
import Balance from '../../components/Balance/Balance';
import MobileTable from '../../components/MobileTable/MobileTable';
// import data from '../../components/Transactions/data.json';
import MobileBtnCont from '../../components/shared/MobileBtnCont/MobileBtnCont';

function MobileStatMarkUp() {
  const [startDate, setStartDate] = useState(new Date());

  const day = startDate.getDate();
  const month = startDate.getMonth() + 1;
  const year = startDate.getFullYear();
  const formatDate = `${day}.${month}.${year}`;

  // const expenses = data;

  return (
    <>
      <Header />
      <main className={styles.mobileStatCont}>
        <section className={styles.mobStatMenu}>
          <ToReports />
          <Balance />
          <div className={styles.containerDate}>
            <Calendar className={styles.icon} width="20px" height="20px" />
            <div className={styles.calendarColor}>
              <DatePicker
                dateFormat="dd.MM.yyyy"
                selected={startDate}
                onChange={date => setStartDate(date)}
                name="date"
                value={formatDate}
                className={styles.date}
              />
            </div>
          </div>
        </section>
        <section className={styles.mobStatTable}>
          {/* <MobileTable transactions={expenses} /> */}
        </section>
      </main>
      <footer className={styles.mobileStatFooter}>
        <MobileBtnCont />
      </footer>
    </>
  );
}

export default MobileStatMarkUp;
