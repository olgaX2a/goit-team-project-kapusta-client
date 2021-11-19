import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { BarChart, Bar, Cell, XAxis, YAxis, ResponsiveContainer, LabelList } from 'recharts';
import styles from './Chart.module.scss';
import { normalizeSum } from '../../utils/normalize';

const MobileCharts = ({ data }) => {
  const MobileBarLabel = ({ x, y, width, value }) => (
    <text x={x + width / 1.1} y={y} textAnchor="middle" fontSize={10} dy={-10}>
      {value ? `${value} грн` : ''}
    </text>
  );
  MobileBarLabel.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    value: PropTypes.number,
  };
  MobileBarLabel.defaultProps = {
    x: 0,
    y: 0,
    width: 0,
    value: 0,
  };

  const MobileCategoryLabel = ({ x, y, value }) => (
    <text x={x} y={y} dy={-10} fontSize={10}>
      {value}
    </text>
  );

  MobileCategoryLabel.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    value: PropTypes.string,
  };

  MobileCategoryLabel.defaultProps = {
    x: 0,
    y: 0,
    value: '',
  };
  return (
    data && (
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 30, right: 0, bottom: 30, left: 0 }}
          className={styles.chartText}
        >
          <Bar
            dataKey="total"
            barSize={18}
            radius={[0, 10, 10, 0]}
            label={<MobileBarLabel />}
            fill="#52555f"
            minPointSize={80}
          >
            {data.map((_, idx) => (
              <Cell key={nanoid()} fill={idx % 3 ? '#FFDAC0' : '#ff751d'} />
            ))}
            <LabelList dataKey="description" content={<MobileCategoryLabel />} fill="#52555F" />
          </Bar>

          <XAxis type="number" hide />
          <YAxis dataKey="description" type="category" scale="band" hide />
        </BarChart>
      </ResponsiveContainer>
    )
  );
};

MobileCharts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      idx: PropTypes.number,
    }),
  ).isRequired,
};

export default MobileCharts;
