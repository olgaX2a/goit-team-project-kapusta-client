import { useState, useEffect } from 'react';
import { useMediaQuery } from './useMediaQuery';

import DesktopChart from './DesktopChart';
import MobileCharts from './MobileCharts';

import styles from './Chart.module.scss';

const Chart = () => {
  // const [data, setData] = useState([]);
  const isMatches = useMediaQuery('(min-width: 768px)');

  const dataChart = [
    { descriprion: 'Свинина', total: 5000 },
    { descriprion: 'Говядина', total: 4500 },
    { descriprion: 'Курица', total: 3200 },
    { descriprion: 'Рыба', total: 2100 },
    { descriprion: 'Панини', total: 1800 },
    { descriprion: 'Кофе', total: 1700 },
    { descriprion: 'Спагетти', total: 1500 },
    { descriprion: 'Шоколад', total: 800 },
    { descriprion: 'Маслины', total: 500 },
    { descriprion: 'Зелень', total: 300 },
  ];
  return isMatches ? (
    <div className={`${styles.container} ${styles.charts}`}>
      <DesktopChart data={dataChart} />
    </div>
  ) : (
    <div className={styles.mobileContainer}>
      <MobileCharts data={dataChart} />
    </div>
  );
};

export default Chart;
// {descriprion:"Свинина",total:"5000", },
// {descriprion:"Говядина",total:"4500",},
// {descriprion:"Курица",total:"3200",},
// {descriprion:"Рыба",total:"2100",},
// {descriprion:"Панини",total:"1800", },
// {descriprion:"Кофе",total:"1700",},
// {descriprion:"Спагетти",total:"1500",},
// {descriprion:"Шоколад",total:"800", },
// {descriprion:"Маслины",total:"500",},
// {descriprion:"Зелень",total:"300", },
