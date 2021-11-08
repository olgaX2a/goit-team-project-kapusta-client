import React from 'react';
import { Bar } from 'react-chartjs-2';
import styles from './Chart.module.scss';

const data = {
  labels: ['Korovka', 'eda', 'noski', 'kot', 'other'],
  datasets: [
    {
      label: 'nothing',
      data: [50, 60, 70, 80, 90],
      borderWidth: 1,
    },
  ],
};

const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};

export default function Chart() {
  return <Bar data={data} options={options} />;
}
// borderRadius: { topLeft: 10, topRight: 10, },
//             maxBarThickness:15,
