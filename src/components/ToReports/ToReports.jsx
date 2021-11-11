import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as BarChartIcon } from '../../assets/bar-chart.svg';
import styles from './ToReports.module.scss';

function ToReports({ onClick }) {
  return (
    <button type="button" className={styles.container} onClick={onClick}>
      <p className={styles.text}>Перейти к отчётам</p>
      <BarChartIcon className={styles.icon} />
    </button>
  );
}

export default ToReports;

ToReports.propTypes = {
  onClick: PropTypes.func.isRequired,
};
