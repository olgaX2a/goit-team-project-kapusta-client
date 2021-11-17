import React, { useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useDispatch, useSelector } from 'react-redux';
import { transactionOperations, transactionSelectors } from '../../redux/transactions';
import { categoryGoods, categoryIncomes } from '../FormInfo/categoryForSelect';
import { INCOME, EXPENSE } from '../../utils/transTypes';
import FormInfo from '../FormInfo/FormInfo';
import TableTransactions from '../TableTransactions/TableTransactions';
import TableEmpty from '../TableTransactions/TableEmpty';
import s from './Transactions.module.scss';

const Transactions = () => {
  const allTransactions = useSelector(transactionSelectors.getTransactions);
  const expenses = allTransactions.filter(transaction => transaction.transactionType === EXPENSE);
  const incomes = allTransactions.filter(transaction => transaction.transactionType === INCOME);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(transactionOperations.fetchTransactionsList());
  }, [dispatch]);
  // если оставить в зависимостях allTransactions,идет постоянный запрос за трансакциями
  return (
    <div className={s.tabsContainer}>
      <Tabs>
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
      </Tabs>
    </div>
  );
};

export default Transactions;
