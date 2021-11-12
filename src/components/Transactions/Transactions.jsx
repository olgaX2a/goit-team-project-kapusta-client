import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { categoryGoods, categoryIncomes } from '../FormInfo/categoryForSelect';
import FormInfo from '../FormInfo/FormInfo';
import TableTransactions from '../TableTransactions/TableTransactions';
// import TableTransactions from '../TableTransactions/TableTransactions';
import data from './data.json';
import s from './Transactions.module.scss';

const Transactions = () => {
  const expenses = data;
  const onSubmit = e => {
    e.preventDefault();
  };
  return (
    <div className={s.section}>
      <Tabs className={s.tabsList}>
        <TabList>
          <Tab>Расходы</Tab>
          <Tab>Доходы</Tab>
        </TabList>

        <TabPanel>
          <FormInfo category={categoryGoods} onSubmit={onSubmit} />
          <TableTransactions transactions={expenses} />
        </TabPanel>
        <TabPanel>
          <FormInfo category={categoryIncomes} />
          {/* позже здесь будут доходы, а пока просто для вида */}
          <TableTransactions transactions={expenses} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Transactions;
