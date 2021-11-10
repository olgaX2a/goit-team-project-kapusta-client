import React from 'react';

import { useMediaQuery } from './useMediaQuery';

import DesktopCharts from './DesktopCharts';
import MobileCharts from './MobileCharts';

import styles from './Chart.module.scss';

const Chart = () => {
  // const [data, setData] = useState([]);
  const isMatches = useMediaQuery('(min-width: 768px)');

  const data1 = [
    { description: 'Canna', total: 5000 },
    { description: 'Robinia', total: 4500 },
    { description: 'Kappa', total: 3200 },
    { description: 'PABA', total: 2100 },
    { description: 'hahn', total: 1800 },
    { description: 'Kobs', total: 1700 },
    { description: 'Careen', total: 1500 },
    { description: 'Wovoka', total: 800 },
  ];

  const sortBy = field => (a, b) => a[field] < b[field] ? 1 : -1;

  const newData = data1
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

export default Chart;
