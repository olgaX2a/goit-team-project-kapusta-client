import React from 'react';
import Header from '../../components/Header/Header';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import Container from '../../components/shared/Container/Container';
import LogoTitle from '../../components/Logo/LogoTitle';
import PagesBg from '../styles/PagesBg';
import pages from '../styles/Pages.module.scss';

function RegisterPageMarkUp() {
  return (
    <>
      <Header />
      <PagesBg />
      <main className={pages.main}>
        <Container extraStyles={pages.wrapper}>
          <div className={pages.logo}>
            <LogoTitle />
          </div>
          <RegisterForm />
        </Container>
      </main>
    </>
  );
}

export default RegisterPageMarkUp;
