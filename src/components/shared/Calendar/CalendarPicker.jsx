import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';
import { ReactComponent as Calendar } from '../../../assets/calendar.svg';
import styles from './CalendarPicker.module.scss';

function CalendarPicker({ onSelect }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const day = selectedDate.getDate();
  const month = selectedDate.getMonth() + 1;
  const year = selectedDate.getFullYear();
  const formatDate = `${day}.${month}.${year}`;

  const handleSelect = date => {
    setSelectedDate(date);
    console.log('{ day, month, year } :>> ', { day, month, year });
    onSelect({ day, month, year });
  };

  return (
    <div className={styles.containerDate}>
      <Calendar className={styles.icon} width="20px" height="20px" />
      <div className={styles.calendarColor}>
        <DatePicker
          dateFormat="dd.MM.yyyy"
          selected={selectedDate}
          onChange={handleSelect}
          name="date"
          value={formatDate}
          className={styles.date}
          maxDate={new Date()}
        />
      </div>
    </div>
  );
}

export default CalendarPicker;

CalendarPicker.propTypes = {
  onSelect: PropTypes.func.isRequired,
};
