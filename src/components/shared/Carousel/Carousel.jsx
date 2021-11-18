/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { ReactComponent as LeftArrow } from '../../../assets/arrow-left.svg';
import { ReactComponent as RightArrow } from '../../../assets/arrow-right.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.scss';

// TODO: fix buttons styles (fill is not applying, no hover & focus)

function PrevArrow({ onClick }) {
  return (
    <button type="button" className={styles.arrowBtn} aria-label="Предыдущий" onClick={onClick}>
      <LeftArrow />
    </button>
  );
}

function NextArrow({ onClick }) {
  return (
    <button type="button" className={styles.arrowBtn} aria-label="Следующий" onClick={onClick}>
      <RightArrow />
    </button>
  );
}
function Carousel({ data, startFrom, title, neverending, onShow, reverse }) {
  const startIdx = startFrom ? data.indexOf(startFrom) : 0;
  const slickClass = styles.carousel;

  const slickSettings = {
    className: slickClass,
    initialSlide: startIdx,
    infinite: neverending,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    rtl: reverse,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange(index) {
      onShow(data[index]);
    },
  };

  if (data.length === 0) {
    return null;
  }

  return (
    <div className={styles.container}>
      {title && <p className={styles.title}>{title}</p>}
      <Slider {...slickSettings}>
        {data.map((text, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <p key={index}>{text}</p>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;

Carousel.defaultProps = {
  startFrom: '',
  title: '',
  neverending: true,
  reverse: false,
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
  reverse: PropTypes.bool,
};
