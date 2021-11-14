import React from 'react';
import PropTypes from 'prop-types';
import CategoryIcon from './CategoryIcon';
import styles from './Category.module.scss';
import expense from '../../utils/expenseTypes';
import { normalizeSum } from '../../utils/normalize';

function CategoryCard({ category, sum, onSelect }) {
  const handleKeyDown = event => {
    if (event.keyCode === 13 || event.keyCode === 32) {
      onSelect(category);
    }
  };

  const handleClick = () => {
    onSelect(category);
  };

  return (
    <div
      className={styles.card}
      role="button"
      aria-label={`Отобразить подробный график по категории ${category}`}
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <p className={styles.sum}>{sum}</p>

      <CategoryIcon category={category} />

      {category === expense.SPORT ? (
        <p className={styles.category} style={{ width: '84px' }}>
          {category}
        </p>
      ) : (
        <p className={styles.category}>{category}</p>
      )}
    </div>
  );
}

export default CategoryCard;
CategoryCard.propTypes = {
  category: PropTypes.string.isRequired,
  sum: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
};
