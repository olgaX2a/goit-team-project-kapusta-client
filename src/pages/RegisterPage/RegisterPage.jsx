import React from 'react';
import styles from './RegisterPage.module.scss';
import Header from '../../components/Header/Header';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import Container from '../../components/shared/Container/Container';
import PagesBg from '../styles/PagesBg';
import pages from '../styles/Pages.module.scss';

function RegisterPageMarkUp() {
  return (
    <>
      <Header />
      <PagesBg />
      <main className={pages.pages}>
        <Container>
          <h1 className={styles.mainPageTitle}>
            Kapu<span className={styles.dollar}>s</span>ta
          </h1>
          <p className={styles.mainPageTitleText}> Smart finance</p>
          <div className={styles.mainPageAuth}>
            <RegisterForm />
          </div>
        </Container>
      </main>
    </>
  );
}

export default RegisterPageMarkUp;
