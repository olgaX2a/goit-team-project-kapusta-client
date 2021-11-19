import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryCollection from '../../components/Category/CategoryCollection';
import Chart from '../../components/Chart/Chart';
import Carousel from '../../components/shared/Carousel/Carousel';
import Paper from '../../components/shared/Paper/Paper';
import { TRANS_NAMES, TRANS_MAP, EXPENSE, INCOME, TRANS_TYPES } from '../../utils/transTypes';
import { getCurrentPeriod, getKeyByValue, getPeriod, parseDate } from '../../utils/helpers';
import Header from '../../components/Header/Header';
import pages from '../styles/Pages.module.scss';
import styles from './ReportsPage.module.scss';
import Container from '../../components/shared/Container';
import { reportsOperations, reportsSelectors } from '../../redux/reports';
import { filter } from '../../redux/reports/slice';
import TransactionTotal from '../../components/TransactionTotal/TransactionTotal';
import Balance from '../../components/Balance/Balance';
import ArrowToGoBack from '../../components/shared/ArrowToGoBack/ArrowToGoBack';

function ReportsPage() {
  const [currentType, setCurrentType] = useState(EXPENSE);
  const [periodToShow, setPeriodToShow] = useState(getCurrentPeriod());
  const dispatch = useDispatch();
  const reports = useSelector(reportsSelectors.getReports);
  const chart = useSelector(reportsSelectors.getChart);
  const period = useSelector(reportsSelectors.getPeriod);
  const income = useSelector(reportsSelectors.getIncome);
  const expense = useSelector(reportsSelectors.getExpense);

  const handleTypeChange = transType => {
    const type = getKeyByValue(TRANS_MAP, transType);
    setCurrentType(type);
  };

  const handlePeriodChange = carousel => {
    const query = parseDate(carousel);
    setPeriodToShow(query);
  };

  const handleCategorySelection = async category => {
    dispatch(filter(category));
  };

  useEffect(() => {
    const { month, year } = periodToShow;
    dispatch(reportsOperations.getPeriodReports({ month, year, transactionType: currentType }));
  }, [periodToShow, currentType]);

  return (
    <>
      <Header />
      <main className={pages.pages}>
        <Container extraStyles={styles.report}>
          <div className={styles.firstRow}>
            <ArrowToGoBack />
            <Balance />
            <Carousel
              title="Текущий период:"
              data={period}
              onShow={handlePeriodChange}
              neverending={false}
              reverse
            />
          </div>
          <div className={styles.row}>
            <TransactionTotal income={income} expense={expense} />
          </div>

          <Paper extraStyles={styles.block}>
            <div className={styles.carouselWrapper}>
              <Carousel data={TRANS_NAMES} onShow={handleTypeChange} />
            </div>
            <CategoryCollection collection={reports} onSelection={handleCategorySelection} />
          </Paper>

          <Chart arrData={chart} />
        </Container>
      </main>
    </>
  );
}

export default ReportsPage;

// TODO: markup
