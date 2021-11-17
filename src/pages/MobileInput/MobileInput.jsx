import React from 'react';
import styles from './MobileInput.module.scss';

import Header from '../../components/Header/Header';
import ArrowToGoBack from '../../components/shared/ArrowToGoBack/ArrowToGoBack';
import FormInfo from '../../components/FormInfo/FormInfo';
// import data from '../../components/Transactions/data.json';
import { categoryGoods } from '../../components/FormInfo/categoryForSelect';

const MobileInputMarkUp = () => {
  const onSubmit = e => {
    console.log(e);
  };
  return (
    <>
      <Header />
      <main className={styles.mobileInputCont}>
        <ArrowToGoBack />
        <FormInfo
          category={categoryGoods}
          onSubmit={onSubmit}
          text="Категория товара"
          type="expense"
        />
      </main>
      <footer className={styles.mobileInputFooter} />
    </>
  );
};

export default MobileInputMarkUp;
