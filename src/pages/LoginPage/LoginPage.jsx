import React from 'react';
import Header from '../../components/Header/Header';
import LoginForm from '../../components/LoginForm/LoginForm';
import Container from '../../components/shared/Container/Container';
import LogoTitle from '../../components/Logo/LogoTitle';
import PagesBg from '../styles/PagesBg';
import pages from '../styles/Pages.module.scss';

function LoginPageMarkUp() {
  return (
    <>
      <Header />
      <PagesBg />
      <main className={pages.main}>
        <Container extraStyles={pages.wrapper}>
          <div className={pages.logo}>
            <LogoTitle />
          </div>
          <LoginForm />
        </Container>
      </main>
    </>
  );
}

export default LoginPageMarkUp;
