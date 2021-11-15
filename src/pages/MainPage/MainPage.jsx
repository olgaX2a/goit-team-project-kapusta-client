import React from 'react';
import styles from './MainPage.module.scss';
import Header from '../../components/Header/Header';
import LoginForm from '../../components/LoginForm/LoginForm';
// import Container from '../../components/shared/Container/Container';

function MainPageMarkUp() {
  return (
    <>
      <Header />
      <main className={styles.mainPageTitleCont}>
        <h1 className={styles.mainPageTitle}>
          Kapu<span className={styles.dollar}>s</span>ta
        </h1>
        <p className={styles.mainPageTitleText}> Smart finance</p>
        <div className={styles.mainPageAuth}>
          <LoginForm />
        </div>
      </main>
      <footer className={styles.mainPageFooter} />
    </>
  );
}

export default MainPageMarkUp;
