import React from 'react';
import { ReactComponent as BarChartIcon } from '../../assets/bar-chart.svg';
import styles from './ToReports.module.scss';

function ToReports() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Перейти к отчётам</p>
      <BarChartIcon className={styles.icon} />
    </div>
  );
}

export default ToReports;
