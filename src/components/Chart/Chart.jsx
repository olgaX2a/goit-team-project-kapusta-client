import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from '../hooks/useMediaQuery';

import DesktopCharts from './DesktopCharts';
import MobileCharts from './MobileCharts';

import styles from './Chart.module.scss';

const Chart = ({ arrData }) => {
  const isMatches = useMediaQuery('(min-width: 768px)');

  const dataChart = arrData.length ? arrData : [0];

  return isMatches ? (
    <div className={`${styles.container} ${styles.charts}`}>
      <DesktopCharts data={dataChart} />
    </div>
  ) : (
    <div className={styles.mobileContainer}>
      <MobileCharts data={dataChart} />
    </div>
  );
};

Chart.propType = {
  arrData: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      total: PropTypes.number,
      length: PropTypes.number,
    }).isRequired,
  ),
};

export default Chart;
