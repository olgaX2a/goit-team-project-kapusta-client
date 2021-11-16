import React from 'react';
import styles from './Testing.module.scss';
import Header from '../../Header/Header';
import ToReports from '../../ToReports/ToReports';
import LoginForm from '../../LoginForm/LoginForm';
import RegisterForm from '../../RegisterForm/RegisterForm';
import Chart from '../../Chart/Chart';
import Category from '../../Category';
import { incomeCategory } from '../../../utils/incomeCategories';
import { expenseCategory } from '../../../utils/expenseCategories';
import Transactions from '../../Transactions/Transactions';
import Paper from '../Paper/Paper';
import MobileTable from '../../MobileTable/MobileTable';
import transactions from '../../MobileTable/data.json';
import { TRANS_TYPES } from '../../../utils/transTypes';
import MainPageMarkUp from '../../../pages/LoginPage/LoginPage';
import HomePageMarkUp from '../../../pages/HomePage/HomePage';
import Container from '../Container/Container';
import ArrowToGoBack from '../ArrowToGoBack/ArrowToGoBack';

// function Testing() {
//   return (
//     <div className={styles.testingContainer}>
//       {/* <MainPageMarkUp /> */}
//       <ArrowToGoBack />
//       {/* <HomePageMarkUp /> */}
//     </div>
//   );
// }

function Testing() {
  return (
    <div className={styles.testingContainer}>
      <Header />
      <div className={styles.underHeader}>
        <div className={styles.personalBlock}>
          <p>Kokorovets Tatiana</p>
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

          <MobileTable transactions={transactions} />
        </div>
        <div className={styles.personalBlock}>
          <p>Olga Sekretaryova</p>
          <ToReports />
          <Category />
        </div>
      </div>
    </div>
  );
}

// function Testing() {
//   return (
//     <div className={styles.testingContainer}>
//       <Header />
//       <div className={styles.underHeader}>
//         <div className={styles.personalBlock}>
//           <p>Kokorovets Tatiana</p>
//           <Button text="Click on me" btnAction={() => console.log('hi')} />
//           <Balance />
//           <Summary summaryData={testSummary} />
//         </div>
//         <div className={styles.personalBlock}>
//           <p>Tetiana Parkhoniuk</p>
//           <LoginForm />
//           <RegisterForm />
//         </div>
//         <div className={styles.personalBlock}>
//           <Chart arrData={[]} />
//         </div>
//         <div className={styles.personalBlock}>
//           <p>Tatyana Tupalo </p>
//           <Transactions />
//         </div>
//         <div className={styles.personalBlock}>
//           <p>Olga Sekretaryova</p>
//           <Paper>
//             <ToReports />
//           </Paper>
//         </div>
//       </div>
//     </div>
//   );
// }

export default Testing;
