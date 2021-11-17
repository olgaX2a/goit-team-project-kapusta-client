import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from '../hooks/useMediaQuery';

import DesktopCharts from './DesktopCharts';
import MobileCharts from './MobileCharts';

import styles from './Chart.module.scss';

const dataSchema = [
  { description: 'Canna', total: 5000 },
  { description: 'Robinia', total: 4500 },
  { description: 'Kappa', total: 3200 },
  { description: 'PABA', total: 2100 },
  { description: 'hahn', total: 1800 },
  { description: 'Kobs', total: 1700 },
  { description: 'Careen', total: 1500 },
  { description: 'Wovoka', total: 800 },
  { description: 'Milk', total: 600 },
  { description: 'Understand', total: 500 },
];

// eslint-disable-next-line react/prop-types
const Chart = ({ arrData }) => {
  const [data, setData] = useState([]);
  const isMatches = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    setData(arrData);
  });

  const sortBy = field => (a, b) => a[field] < b[field] ? 1 : -1;

  const newData = data
    .reduce((acc, { description, total }) => {
      const myCategory = description;
      const newArr = acc.find(el => el.description === description);
      if (!newArr) {
        acc.push({ description: myCategory, total });
      }

      if (newArr) {
        const idx = acc.findIndex(el => el.description === description);
        acc[idx].total += total;
      }
      return acc;
    }, [])
    .sort(sortBy('total'));

  const dataChart = newData.length ? newData : [0];

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

Chart.defaultProps = {
  arrData: dataSchema,
};

export default Chart;
