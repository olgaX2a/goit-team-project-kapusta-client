import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import styles from './Balance.module.scss';
import Notification from '../shared/Notification/Notification';
import { authSelectors } from '../../redux/auth';
import balanceOperations from '../../redux/balance/balance-operations';

const Balance = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(authOperations.fetchCurrentUser());
  // }, [dispatch]);

  const balance = useSelector(authSelectors.getUserBalance);
  const [newBalance, setNewBalance] = useState(balance);

  const location = useLocation();
  const isReportPage = location.pathname === '/reports';

  const [notificationOpen, setNotificationOpen] = useState(true);

  const updateBalance = e => {
    e.preventDefault();
    console.log('newBalance :>> ', newBalance);
    // const newBalance = e.target.balance.value;
    // dispatch(balanceOperations.setBalanceOperation(newBalance));
    // console.log(newBalance);
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
