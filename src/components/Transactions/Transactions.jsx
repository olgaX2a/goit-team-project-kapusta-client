import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useDispatch, useSelector } from 'react-redux';
import { transactionOperations, transactionSelectors } from '../../redux/transactions';
import { categoryGoods, categoryIncomes } from '../FormInfo/categoryForSelect';
import FormInfo from '../FormInfo/FormInfo';
import TableTransactions from '../TableTransactions/TableTransactions';
import TableEmpty from '../TableTransactions/TableEmpty';
import Summary from '../Summary/Summary';
import s from './Transactions.module.scss';

const Transactions = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const expenses = useSelector(transactionSelectors.getExpenses);
  const incomes = useSelector(transactionSelectors.getIncomes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(transactionOperations.fetchTransactionsList());
  }, [dispatch]);

  return (
    <div className={s.tabsContainer}>
      <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <TabList>
          <Tab>Расход</Tab>
          <Tab>Доход</Tab>
        </TabList>

        <TabPanel>
          <FormInfo categories={categoryGoods} text="Категория товара" transactionType="expense" />
          {expenses.length < 0 && <TableEmpty />}
          {expenses && <TableTransactions transactions={expenses} />}
        </TabPanel>

        <TabPanel>
          <FormInfo categories={categoryIncomes} text="Категория дохода" transactionType="income" />
          {incomes.length < 0 && <TableEmpty />}
          {incomes && <TableTransactions transactions={incomes} />}
        </TabPanel>
        <div className={s.homePageSummary}>
          <Summary handelTab={tabIndex} />
        </div>
      </Tabs>
    </div>
  );
};

export default Transactions;
