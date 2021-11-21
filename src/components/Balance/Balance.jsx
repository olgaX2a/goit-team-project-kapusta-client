import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import { authSelectors, authOperations } from '../../redux/auth';
import Notification from '../shared/Notification/Notification';
import styles from './Balance.module.scss';

const Balance = () => {
  const dispatch = useDispatch();
  const balance = useSelector(authSelectors.getUserBalance);
  const [newBalance, setNewBalance] = useState(balance);

  const location = useLocation();
  const isReportPage = location.pathname === '/reports';
  const [notificationOpen, setNotificationOpen] = useState(true);

  useEffect(() => {
    setNewBalance(balance);
  }, [balance]);

  const updateBalance = e => {
    e.preventDefault();
    console.log('newBalance :>> ', newBalance);
    dispatch(authOperations.setBalance({ balance: Number(newBalance) }));
  };

  const removeNotification = () => {
    setNotificationOpen(false);
  };

  const handleChange = e => {
    setNewBalance(e.value);
  };

  return (
    <form
      className={!isReportPage ? styles.balanceForm : styles.balanceFormReport}
      onSubmit={updateBalance}
    >
      <label htmlFor="balance" className={styles.balanceLabel}>
        Баланс:
        <div className={styles.buttonsGroup}>
          {newBalance === 0 && <Notification onClick={removeNotification} />}
          <NumberFormat
            value={newBalance}
            thousandSeparator={' '}
            decimalSeparator="."
            decimalScale={2}
            fixedDecimalScale
            suffix=" UAH"
            displayType="input"
            onValueChange={handleChange}
            className={!isReportPage ? styles.balanceInput : styles.balanceInputReport}
          />
          <button className={!isReportPage ? styles.balanceButton : styles.report} type="submit">
            подтвердить
          </button>
        </div>
      </label>
    </form>
  );
};

export default Balance;
