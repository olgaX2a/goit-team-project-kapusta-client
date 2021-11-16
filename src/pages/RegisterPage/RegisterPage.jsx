import React from 'react';
import styles from './RegisterPage.module.scss';
import Header from '../../components/Header/Header';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
// import Container from '../../components/shared/Container/Container';

function RegisterPageMarkUp() {
  return (
    <>
      <Header />
      <main className={styles.mainPageTitleCont}>
        <h1 className={styles.mainPageTitle}>
          Kapu<span className={styles.dollar}>s</span>ta
        </h1>
        <p className={styles.mainPageTitleText}> Smart finance</p>
        <div className={styles.mainPageAuth}>
          <RegisterForm />
        </div>
      </main>
      <footer className={styles.mainPageFooter} />
    </>
  );
}

export default RegisterPageMarkUp;
