import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { BarChart, Bar, Cell, XAxis } from 'recharts';
import { normalizeSum } from '../../utils/normalize';

import styles from './Chart.module.scss';

const DesktopCharts = ({ data }) => {
  const renderCustomizedLabel = props => {
    const { x, y, width, value } = props;
    return (
      <text x={x + width / 2} y={y} dy={-10} textAnchor="middle" fontSize={12}>
        {value && `${normalizeSum(value)} грн`}
      </text>
    );
  };

  return (
    data && (
      <div className={styles.chartWrapper}>
        <BarChart
          data={data}
          width={666}
          height={422}
          margin={{ top: 40, right: 15, bottom: 20, left: 15 }}
          className={styles.chartText}
        >
          <Bar dataKey="total" radius={[10, 10, 0, 0]} barSize={38} label={renderCustomizedLabel}>
            {data.map((_, idx) => (
              <Cell key={nanoid()} fill={idx % 3 ? '#FFDAC0' : '#ff751d'} />
            ))}
          </Bar>
          <XAxis dataKey="description" axisLine={false} tickLine={false} />
        </BarChart>
      </div>
    )
  );
};
DesktopCharts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      idx: PropTypes.number,
    }),
  ).isRequired,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  value: PropTypes.number,
};

DesktopCharts.defaultProps = {
  x: 0,
  y: 0,
  width: 0,
  value: 0,
};

export default DesktopCharts;
