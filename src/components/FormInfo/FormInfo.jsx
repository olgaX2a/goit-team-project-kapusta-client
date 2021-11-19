/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { transactionOperations } from '../../redux/transactions';
import { ReactComponent as Calculator } from '../../assets/calculator.svg';
import { ReactComponent as Calendar } from '../../assets/calendar.svg';
import s from './FormInfo.module.scss';

// eslint-disable-next-line react/prop-types
const FormInfo = ({ categories, text, transactionType }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const day = startDate.getDate();
  const month = startDate.getMonth() + 1;
  const year = startDate.getFullYear();
  const formatDate = `${day}.${month}.${year}`;

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'description':
        setDescription(value);
        break;

      case 'category':
        setCategory(value);
        break;

      case 'amount':
        setAmount(value);
        break;

      default:
        throw new Error('Unknown state!');
    }
  };
  const reset = () => {
    setDescription('');
    setAmount('');
    setCategory('');
  };
  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      transactionOperations.createTransaction({
        description,
        amount,
        category,
        month,
        day,
        year,
        transactionType,
      }),
    );

    reset();
  };

  return (
    <div className={s.infoData}>
      <div className={s.containerDate}>
        <Calendar className={s.icon} width="20px" height="20px" />
        <div className={s.calendarColor}>
          <DatePicker
            dateFormat="dd.MM.yyyy"
            selected={startDate}
            onChange={date => setStartDate(date)}
            name="date"
            value={formatDate}
            className={s.date}
          />
        </div>
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
            name="category"
            onChange={handleChange}
            value={category}
          >
            <option>{text}</option>
            {categories.map(({ name, id }) => (
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
              name="amount"
              value={amount}
              onChange={handleChange}
            />
            <span className={s.separator} />
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

FormInfo.propType = {
  category: PropTypes.arrayOf(PropTypes.object).isRequired,
  text: PropTypes.string.isRequired,
};

export default FormInfo;
