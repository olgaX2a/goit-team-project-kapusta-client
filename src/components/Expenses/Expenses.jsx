import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { categoryGoods, categoryIncomes } from '../FormInfo/categoryForSelect';
import FormInfo from '../FormInfo/FormInfo';
import TableForm from '../Table/Table';
import data from './data.json';
import s from './Expenses.module.scss';

const Expenses = () => {
  const expenses = data;
  return (
    <div className={s.section}>
      <Tabs>
        <TabList className={s.tabs}>
          <Tab>Расходы</Tab>
          <Tab>Доходы</Tab>
        </TabList>

        <TabPanel>
          <FormInfo category={categoryGoods} />
          <TableForm transactionType={expenses} />
        </TabPanel>
        <TabPanel>
          <FormInfo category={categoryIncomes} />
          {/* <TableForm transactionType={incomes} /> */}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Expenses;
