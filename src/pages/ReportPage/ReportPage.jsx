import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CategoryCollection from '../../components/Category/CategoryCollection';
import Chart from '../../components/Chart/Chart';
import Carousel from '../../components/shared/Carousel/Carousel';
import Paper from '../../components/shared/Paper/Paper';
import { TRANS_NAMES, TRANS_MAP } from '../../utils/transTypes';
import { expenseCategory } from '../../utils/expenseCategories';
import { getKeyByValue } from '../../utils/helpers';
import Header from '../../components/Header/Header';

import pages from '../styles/Pages.module.scss';
import styles from './ReportPage.module.scss';
import Container from '../../components/shared/Container';

const testCategories = [
  { category: expenseCategory[0], sum: 20475 },
  { category: expenseCategory[1], sum: 0 },
  { category: expenseCategory[7], sum: 158 },
  { category: expenseCategory[3], sum: 9635 },
  { category: expenseCategory[8], sum: 1250 },
  { category: expenseCategory[6], sum: 34569 },
];
function ReportPage() {
  const dispatch = useDispatch();
  const handleTypeChange = transType => {
    const type = getKeyByValue(TRANS_MAP, transType);
    console.log('type :>> ', type);
  };

  const handleCategorySelection = category => {
    console.log('category :>> ', category);
  };

  return (
    <>
      <Header />
      <main className={pages.pages}>
        <Container>
          <Carousel title="Текущий период:" data={TRANS_NAMES} onShow={handleTypeChange} />
        </Container>
        <Container>
          <Paper extraStyles={styles.block}>
            <div className={styles.carouselWrapper}>
              <Carousel data={TRANS_NAMES} onShow={handleTypeChange} />
            </div>

            <CategoryCollection collection={testCategories} onSelection={handleCategorySelection} />
          </Paper>
        </Container>
        <Container>
          <Chart />
        </Container>
      </main>
    </>
  );
}

export default ReportPage;
