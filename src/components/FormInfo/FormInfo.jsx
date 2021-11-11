import { ReactComponent as Calculator } from '../../assets/calculator.svg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
// import Button from '../../components/shared/Button/Button';
import { expensesOperations, expensesSelectors } from '../../redux/expenses';
import { incomesOperations, incomesSelectors } from '../../redux/incomes';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactComponent as Calendar } from '../../assets/calendar.svg';
import s from './FormInfo.module.scss';

const FormInfo = ({ category, transType }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [sum, setSum] = useState('');
  const [categories, setCategories] = useState('');

  const dispatch = useDispatch();

  const day = startDate.getDate();
  const month = startDate.getMonth();
  const year = startDate.getFullYear();
  const formatDate = `${day}.${month}.${year}`;

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'description':
        setDescription(value);
        break;

      case 'categories':
        setCategories(value);
        break;

      case 'sum':
        setSum(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (transType === 'expense') {
      dispatch(
        expensesOperations.createExpense({ description, sum, categories, month, day, year }),
      );
    }
    if (transType === 'income') {
      dispatch(incomesOperations.createIncome({ description, sum, categories, month, day, year }));
    }

    reset();

    // toast.success('Done!');
  };
  const reset = () => {
    setDescription('');
    setSum('');
    setCategories('');
  };
  return (
    <div className={s.infoData}>
      <div className={s.containerDate}>
        <Calendar className={s.icon} width="20px" height="20px" />
        <DatePicker
          dateFormat="dd.MM.yyyy"
          selected={startDate}
          onChange={date => setStartDate(date)}
          name="date"
          value={formatDate}
          className={s.date}
        />
      </div>
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.inputFild}>
          <input
            placeholder="Описание товара"
            className={s.description}
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
          />
          <select
            className={s.selectCategory}
            name="categories"
            onChange={handleChange}
            value={categories}
          >
            {category.map(({ name, id }) => (
              <option key={id} value={name}>
                {name}
              </option>
            ))}
          </select>

          <div className={s.containerSum}>
            <input
              placeholder="00.00 UAH"
              className={s.sum}
              type="number"
              name="sum"
              value={sum}
              onChange={handleChange}
            />
            <span className={s.separator}></span>
            <Calculator className={s.icon} width="20px" height="20px" />
          </div>
        </div>

        <div className={s.formButton}>
          <button type="submit" className={s.button}>
            Ввод
          </button>

          <button type="button" className={s.button} onClick={reset}>
            Очистить
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormInfo;
