/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { transactionOperations } from '../../redux/transactions';
import { authOperations } from '../../redux/auth';
import { ReactComponent as Calculator } from '../../assets/calculator.svg';
import { ReactComponent as Calendar } from '../../assets/calendar.svg';
import { createTransaction } from '../../services/transactionsAPI';
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

  const selectChange = e => {
    setCategory(e.target.value);
  };
  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'description':
        setDescription(value);
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

  const handleSubmit = async e => {
    e.preventDefault();
    const resp = await createTransaction(transactionType, {
      description,
      amount,
      category,
      month,
      day,
      year,
    });

    if (resp) {
      dispatch(transactionOperations.fetchTransactionsList());
      dispatch(authOperations.getBalance());
    }
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
            maxDate={new Date()}
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
          <FormControl className={s.formControl}>
            <InputLabel className={s.InputSelect} id="select-label">
              {text}
            </InputLabel>

            <Select
              className={s.select}
              autoWidth
              labelId="select-label"
              id="select"
              value={category}
              onChange={selectChange}
            >
              {categories.map(({ name, id }) => (
                <MenuItem key={id} value={name} className={s.menuItem}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

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

// import Select from '@mui/material/Select';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import Box from '@mui/material/Box';
/* <Box sx={{ minWidth: 120 }}>
  <FormControl fullWidth>
    <InputLabel className={s.inputSelect} id="select-label">
      {text}
    </InputLabel>
    <Select
      className={s.Select}
      autoWidth
      // className={s.selectCategory}
      labelId="select-label"
      id="select-label"
      value={category}
      label={text}
      onChange={handleChange}
    >
      {categories.map(({ name, id }) => (
        <MenuItem key={id} value={name}>
          {name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
</Box>; */
