import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryCollection from '../../components/Category/CategoryCollection';
import Chart from '../../components/Chart/Chart';
import Carousel from '../../components/shared/Carousel/Carousel';
import Paper from '../../components/shared/Paper/Paper';
import { TRANS_NAMES, TRANS_MAP, EXPENSE, INCOME } from '../../utils/transTypes';
import { expenseCategory } from '../../utils/expenseCategories';
import { getKeyByValue } from '../../utils/helpers';
import Header from '../../components/Header/Header';
import { normalizePeriod } from '../../utils/normalize';
import pages from '../styles/Pages.module.scss';
import styles from './ReportsPage.module.scss';
import Container from '../../components/shared/Container';
import { reportsOperations, reportsSelectors } from '../../redux/reports';
import { filter } from '../../redux/reports/slice';

function ReportsPage() {
  const [currentType, setCurrentType] = useState(EXPENSE);
  const dispatch = useDispatch();
  const reports = useSelector(reportsSelectors.getReports);
  const chart = useSelector(reportsSelectors.getChart);

  const handleTypeChange = transType => {
    const type = getKeyByValue(TRANS_MAP, transType);
    setCurrentType(type);
  };

  const handleCategorySelection = async category => {
    dispatch(filter(category));
  };

  useEffect(() => {
    dispatch(
      reportsOperations.getPeriodReports({ month: 11, year: 2021, transactionType: currentType }),
    );
  }, [currentType]);

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
            <CategoryCollection collection={reports} onSelection={handleCategorySelection} />
          </Paper>
        </Container>
        <Container>
          <Chart arrData={chart} />
        </Container>
      </main>
    </>
  );
}

export default ReportsPage;

// TODO: date carousel, markup
