import React from 'react';
import styles from './Testing.module.scss';
import Header from '../../Header/Header';
import Button from '../Button/Button';
import ToReports from '../../ToReports/ToReports';
import Chart from '../../Chart/Chart';

function Testing() {
  return (
    <div className={styles.testingContainer}>
      <Header />
      <div className={styles.underHeader}>
        <div className={styles.personalBlock}>
          <p>Kokorovets Tatiana</p>
          <Button text="click" btnAction={() => console.log('click')} />
        </div>
        <div className={styles.personalBlock}>
          <p>Tetiana Parkhoniuk</p>
        </div>
        <div className={styles.personalBlock}>
          <Chart />
        </div>
        <div className={styles.personalBlock}>
          <p>Tatyana Tupalo </p>
        </div>
        <div className={styles.personalBlock}>
          <p>Olga Sekretaryova</p>
          <ToReports />
        </div>
      </div>
    </div>
  );
}

export default Testing;
