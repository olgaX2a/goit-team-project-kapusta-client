// import { Component } from 'react';
// import { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

import FormInfo from '../FormInfo/FormInfo';

import Table from '../Table/Table';
import s from './Expenses.module.scss';

const Expenses = () => {
  return (
    <div className={s.section}>
      <div>
        <FormInfo />
      </div>

      <Table />
    </div>
  );
};

export default Expenses;
