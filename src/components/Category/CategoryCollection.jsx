import React from 'react';
import PropTypes from 'prop-types';
import CategoryCard from './CategoryCard';
import styles from './Category.module.scss';

function CategoryCollection({ collection, onSelection }) {
  console.log('collection :>> ', collection);
  return (
    <div className={styles.cardContainer}>
      {collection.map(el => {
        const { category, sum } = el;
        if (sum !== 0) {
          return (
            <CategoryCard category={category} onSelect={onSelection} sum={sum} key={category} />
          );
        }
        return null;
      })}
    </div>
  );
}

export default CategoryCollection;

CategoryCollection.propTypes = {
  collection: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelection: PropTypes.func.isRequired,
};
