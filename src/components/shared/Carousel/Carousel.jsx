import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as LeftArrow } from '../../../assets/arrow-left.svg';
import { ReactComponent as RightArrow } from '../../../assets/arrow-right.svg';
import styles from './Carousel.module.scss';

function Carousel({ data, startFrom, title, eternal, onShow }) {
  const [current, setCurrent] = useState();

  if (data.length === 0) {
    return null;
  }
  const next = () => {
    console.log('next');
  };
  const prev = () => {
    console.log('prev');
  };
  return (
    <div className={styles.container}>
      {title && <p className={styles.title}>{title}</p>}
      <div className={styles.carousel}>
        <button type="button" className={styles.arrowBtn} aria-label="Предыдущий" onClick={prev}>
          <LeftArrow />
        </button>

        {data.map((text, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <p key={index} className={styles.text}>
            {text}
          </p>
        ))}

        <button type="button" className={styles.arrowBtn} aria-label="Следующий" onClick={next}>
          <RightArrow />
        </button>
      </div>
    </div>
  );
}

export default Carousel;

Carousel.defaultProps = {
  startFrom: '',
  title: '',
  eternal: false,
};

Carousel.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  startFrom: PropTypes.string,
  title: PropTypes.string,
  eternal: PropTypes.bool,
  onShow: PropTypes.func.isRequired,
};
