import React from 'react';
import styles from './Testing.module.scss';
import Header from '../../Header/Header';
import Button from '../Button/Button';
import Balance from '../../Balance/Balance';
import ToReports from '../../ToReports/ToReports';
import LoginForm from '../../LoginForm/LoginForm';
import RegisterForm from '../../RegisterForm/RegisterForm';
import Chart from '../../Chart/Chart';
import Transactions from '../../Transactions/Transactions';
import Summary from '../../Summary/Summary';
import Paper from '../Paper/Paper';
import Carousel from '../Carousel/Carousel';
import { TRANS_TYPES } from '../../../utils/transTypes';

const testSummary = [
  { key: 1, month: 'january', sum: 20475 },
  { key: 2, month: 'february', sum: 48567 },
  { key: 3, month: 'march', sum: 34665 },
  { key: 4, month: 'april', sum: 9635 },
  { key: 5, month: 'may', sum: 788366 },
  { key: 6, month: 'june', sum: 34569 },
];

const testOnShow = current => {
  console.log('current ✔ ', current);
};

function Testing() {
  return (
    <div className={styles.testingContainer}>
      <Header />
      <div className={styles.underHeader}>
        <div className={styles.personalBlock}>
          <p>Kokorovets Tatiana</p>
          <Button text="Click on me" btnAction={() => console.log('hi')} />
          <Balance />
          <Summary summaryData={testSummary} />
        </div>
        <div className={styles.personalBlock}>
          <p>Tetiana Parkhoniuk</p>
          <LoginForm />
          <RegisterForm />
        </div>
        <div className={styles.personalBlock}>
          <Chart arrData={[]} />
        </div>
        <div className={styles.personalBlock}>
          <p>Tatyana Tupalo </p>
          <Transactions />
        </div>
        <div className={styles.personalBlock}>
          <p>Olga Sekretaryova</p>
          <Paper>
            <ToReports />
          </Paper>
          <Carousel title={'Carousel title'} data={TRANS_TYPES} onShow={testOnShow} />
        </div>
      </div>
    </div>
  );
}

export default Testing;
