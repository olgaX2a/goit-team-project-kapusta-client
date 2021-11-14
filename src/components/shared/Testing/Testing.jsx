import React from 'react';
import styles from './Testing.module.scss';
import Header from '../../Header/Header';
import Button from '../Button/Button';
import Balance from '../../Balance/Balance';
import ToReports from '../../ToReports/ToReports';
import LoginForm from '../../LoginForm/LoginForm';
import RegisterForm from '../../RegisterForm/RegisterForm';
import Chart from '../../Chart/Chart';
import CategoryCard from '../../CategoryCard';
import CategoryCollection from '../../CategoryCard/CategoryCollection';
import { incomeCategory } from '../../../utils/incomeCategories';
import { expenseCategory } from '../../../utils/expenseCategories';
import Transactions from '../../Transactions/Transactions';
import Summary from '../../Summary/Summary';

const testSummary = [
  { key: 1, month: 'january', sum: 20475 },
  { key: 2, month: 'february', sum: 48567 },
  { key: 3, month: 'march', sum: 34665 },
  { key: 4, month: 'april', sum: 9635 },
  { key: 5, month: 'may', sum: 788366 },
  { key: 6, month: 'june', sum: 34569 },
];

const testCategories = [
  { category: expenseCategory[0], sum: 20475 },
  { category: expenseCategory[1], sum: 0 },
  { category: expenseCategory[7], sum: 158 },
  { category: expenseCategory[3], sum: 9635 },
  { category: expenseCategory[8], sum: 1250 },
  { category: expenseCategory[6], sum: 34569 },
];

function Testing() {
  const cardClick = selected => {
    console.log(`clicked on ${selected} category in testing 🎃 `);
  };
  console.log('incomeCategory :>> ', incomeCategory);
  console.log('expenseCategory[4] :>> ', expenseCategory[4]);
  return (
    <div className={styles.testingContainer}>
      <Header />
      <div className={styles.underHeader}>
        <div className={styles.personalBlock}>
          <p>Kokorovets Tatiana</p>
          <Button text="Click on me" btnAction={() => console.log('hi')} />
          <Balance />
          <Summary summaryData={testSummary} />
        </div>
        <div className={styles.personalBlock}>
          <p>Tetiana Parkhoniuk</p>
          <LoginForm />
          <RegisterForm />
        </div>
        <div className={styles.personalBlock}>
          <Chart arrData={[]} />
        </div>
        <div className={styles.personalBlock}>
          <p>Tatyana Tupalo </p>
          <Transactions />
        </div>
        <div className={styles.personalBlock}>
          <p>Olga Sekretaryova</p>
          <ToReports />
          <div>
            {incomeCategory.map(el => (
              <CategoryCard category={el} onSelect={cardClick} sum={150} />
            ))}
          </div>
          <CategoryCollection collection={testCategories} onSelection={cardClick} />
        </div>
      </div>
    </div>
  );
}

export default Testing;
