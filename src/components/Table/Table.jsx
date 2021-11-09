import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { expensesOperations, expensesSelectors } from '../../redux/expenses';
import s from './Table.module.scss';

const Table = () => {
  const expenses = useSelector(expensesSelectors.getExpenses);
  console.log(expenses);
  // const dispatch = useDispatch();
  // const onDeleteExpense = id => dispatch(expensesOperations.deleteExpens(id));

  return (
    <table>
      <thead>
        <tr>
          <th>Дата</th>
          <th>Описание</th>
          <th>Категория</th>
          <th>Сумма</th>
        </tr>
      </thead>

      <tbody>
        {expenses.map(({ descriptionGoods, sum, categoriesGoods, startDate }) => (
          <tr>
            <td>{startDate}</td>
            <td>{descriptionGoods}</td>
            <td>{categoriesGoods}</td>
            <td>{sum}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
