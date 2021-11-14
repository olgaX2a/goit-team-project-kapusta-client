/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { ReactComponent as LeftArrow } from '../../../assets/arrow-left.svg';
import { ReactComponent as RightArrow } from '../../../assets/arrow-right.svg';
import styles from './Carousel.module.scss';

function PrevArrow({ onClick }) {
  return (
    <button type="button" className={styles.arrowBtn} aria-label="Предыдущий" onClick={onClick}>
      <LeftArrow />
    </button>
  );
}

function NextArrow({ onClick }) {
  return (
    <button type="button" className={styles.arrowBtn} aria-label="Предыдущий" onClick={onClick}>
      <RightArrow />
    </button>
  );
}
function Carousel({ data, startFrom, title, neverending, onShow }) {
  const currentIdx = startFrom ? data.indexOf(startFrom) : 0;
  const [active, setActive] = useState(currentIdx);

  const slickSettings = {
    className: '',
    initialSlide: currentIdx,
    infinite: neverending,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // beforeChange: current => setActive({ activeSlide: next }),

    afterChange(index) {
      setActive(index);
      console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
    },
  };

  if (data.length === 0) {
    return null;
  }

  return (
    <div className={styles.container}>
      {title && <p className={styles.title}>{title}</p>}
      <div className={styles.carousel}>
        <Slider {...slickSettings}>
          {data.map((text, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <p key={index}>{text}</p>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;

Carousel.defaultProps = {
  startFrom: '',
  title: '',
  neverending: false,
};

PrevArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

NextArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};
Carousel.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  startFrom: PropTypes.string,
  title: PropTypes.string,
  neverending: PropTypes.bool,
  onShow: PropTypes.func.isRequired,
};
