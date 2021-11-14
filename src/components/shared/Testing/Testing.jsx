import React from 'react';
import styles from './Testing.module.scss';
import Header from '../../Header/Header';
import ToReports from '../../ToReports/ToReports';
import LoginForm from '../../LoginForm/LoginForm';
import RegisterForm from '../../RegisterForm/RegisterForm';
import Chart from '../../Chart/Chart';
import Transactions from '../../Transactions/Transactions';
import Paper from '../Paper/Paper';
import MainPageMarkUp from '../../../pages/MainPage/MainPage';
import HomePageMarkUp from '../../../pages/HomePage/HomePage';

// function Testing() {
//   return (
//     <div className={styles.testingContainer}>
//       {/* <MainPageMarkUp /> */}
//       <HomePageMarkUp />
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
        </div>
        <div className={styles.personalBlock}>
          <p>Olga Sekretaryova</p>
          <Paper>
            <ToReports />
          </Paper>
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
