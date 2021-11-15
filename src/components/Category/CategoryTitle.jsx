import React from 'react';
import PropTypes from 'prop-types';
import styles from './Category.module.scss';

function CategoryTitle({ title }) {
  return <p className={styles.title}>{title}</p>;
}

export default CategoryTitle;

CategoryTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
