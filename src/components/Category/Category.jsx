import React, { useEffect } from 'react';
import CategoryCollection from './CategoryCollection';
import Carousel from '../shared/Carousel/Carousel';
import Paper from '../shared/Paper/Paper';
import { TRANS_TYPES } from '../../utils/transTypes';
import { expenseCategory } from '../../utils/expenseCategories';

const testCategories = [
  { category: expenseCategory[0], sum: 20475 },
  { category: expenseCategory[1], sum: 0 },
  { category: expenseCategory[7], sum: 158 },
  { category: expenseCategory[3], sum: 9635 },
  { category: expenseCategory[8], sum: 1250 },
  { category: expenseCategory[6], sum: 34569 },
];

function Category() {
  console.log('testCategories :>> ', testCategories);
  const handleTypeChange = transType => {
    console.log('transType :>> ', transType);
  };

  const handleCategorySelection = category => {
    console.log('category :>> ', category);
  };

  return (
    <Paper>
      <Carousel data={TRANS_TYPES} onShow={handleTypeChange} />
      <CategoryCollection data={testCategories} onSelection={handleCategorySelection} />
    </Paper>
  );
}

export default Category;

// TODO: make normal handlers with redux
