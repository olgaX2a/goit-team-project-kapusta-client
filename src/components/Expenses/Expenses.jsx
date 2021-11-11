// import { Component } from 'react';
// import { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { Tab } from 'react-tabs';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { categoryGoods, categoryIncomes } from '../FormInfo/categoryForSelect';
import FormInfo from '../FormInfo/FormInfo';
import { expensesOperations, expensesSelectors } from '../../redux/expenses';

import TableForm from '../Table/Table';
import s from './Expenses.module.scss';

const Expenses = () => {
  const expenses = useSelector(expensesSelectors.getExpenses);
  // const isLoadingExpenses = useSelector(expensesSelectors.getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(expensesOperations.fetchExpensesList());
  }, [dispatch]);

  return (
    <div className={s.section}>
      <Tabs>
        <TabList>
          <Tab>Расходы</Tab>
          <Tab>Доходы</Tab>
        </TabList>

        <TabPanel>
          <FormInfo category={categoryGoods} />
          <TableForm transactionType={expenses} />
        </TabPanel>
        <TabPanel>
          <FormInfo category={categoryIncomes} />
          {/* <TableForm /> */}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Expenses;
