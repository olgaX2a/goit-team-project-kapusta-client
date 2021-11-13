import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { categoryGoods, categoryIncomes } from '../FormInfo/categoryForSelect';
import FormInfo from '../FormInfo/FormInfo';
import TableTransactions from '../TableTransactions/TableTransactions';
import data from './data.json';
import s from './Transactions.module.scss';

const Transactions = () => {
  const expenses = data;
  const onSubmit = e => {
    console.log(e);
  };
  return (
    <div className={s.tabsContainer}>
      <Tabs>
        <TabList>
          <Tab>Расход</Tab>
          <Tab>Доход</Tab>
        </TabList>

        <TabPanel>
          <FormInfo
            category={categoryGoods}
            onSubmit={onSubmit}
            text="Категория товара"
            type="expense"
          />
          <TableTransactions transactions={expenses} />
        </TabPanel>

        <TabPanel>
          <FormInfo
            category={categoryIncomes}
            onSubmit={onSubmit}
            text="Категория дохода"
            type="income"
          />
          {/* позже здесь будут доходы, а пока просто для вида */}
          <TableTransactions transactions={expenses} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Transactions;
