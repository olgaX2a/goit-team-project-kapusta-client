// import { useState, useEffect } from 'react';
import { useMediaQuery } from './useMediaQuery';

import DesktopCharts from './DesktopCharts';
import MobileCharts from './MobileCharts';

import styles from './Chart.module.scss';

const Chart = () => {
  // const [data, setData] = useState([]);
  const isMatches = useMediaQuery('(min-width: 768px)');

  const data1 = [
    { description: 'Свинина', total: 5000 },
    { description: 'Говядина', total: 4500 },
    { description: 'Курица', total: 3200 },
    { description: 'Рыба', total: 2100 },
    { description: 'Панини', total: 1800 },
    { description: 'Кофе', total: 1700 },
    { description: 'Спагетти', total: 1500 },
    { description: 'Шоколад', total: 800 },
    // { description: 'Маслины', total: 500 },
    // { description: 'Зелень', total: 300 },
  ];

  const sortBy = field => (a, b) => a[field] < b[field] ? 1 : -1;

  const newData = data1
    ?.reduce((acc, { description, total }) => {
      const myCategory = description;
      const newArr = acc?.find(el => el.description === description);
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

  const dataChart = newData?.length ? newData : [0];

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
