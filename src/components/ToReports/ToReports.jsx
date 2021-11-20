import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as BarChartIcon } from '../../assets/bar-chart.svg';
import styles from './ToReports.module.scss';

function ToReports() {
  return (
    <NavLink to="/reports" className={styles.container}>
      <p className={styles.text}>Перейти к отчётам</p>
      <BarChartIcon className={styles.icon} />
    </NavLink>
  );
}

export default ToReports;
