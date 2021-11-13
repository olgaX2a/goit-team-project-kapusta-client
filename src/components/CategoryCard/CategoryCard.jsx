import React from 'react';
import PropTypes from 'prop-types';
import CategoryIcon from './CategoryIcon';
import styles from './Category.module.scss';

function CategoryCard({ category, sum, onClick }) {
  return (
    <button onClick={onClick} type="button" className={styles.card}>
      <p>{sum}</p>
      <CategoryIcon category={category} />
      <p>{category}</p>
    </button>
  );
}

export default CategoryCard;
CategoryCard.propTypes = {
  category: PropTypes.string.isRequired,
  sum: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
