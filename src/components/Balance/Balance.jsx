import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import styles from './Balance.module.scss';
import Notification from '../shared/Notification/Notification';
import { authSelectors } from '../../redux/auth';

const Balance = () => {
  const balance = useSelector(authSelectors.getUserBalance);

  const location = useLocation();
  const isReportPage = location.pathname === '/reports';

  const [notificationOpen, setNotificationOpen] = useState(true);

  const onSubmit = e => {
    e.preventDefault();
    console.log('Дописать функцию обновления баланса');
  };

  const removeNotification = () => {
    setNotificationOpen(false);
  };

  return (
    // <div className={!isReportPage ? styles.cont : styles.contReport} />
    <form className={styles.balanceForm}>
      <label htmlFor="balance" className={styles.balanceLabel}>
        Баланс:
        <div className={styles.buttonsGroup}>
          {balance === 0 ? (
            <>
              {notificationOpen && <Notification onClick={removeNotification} />}
              <input
                type="number"
                step="0.01"
                name="name"
                maxLength="10"
                placeholder="00.00"
                onChange={removeNotification}
                className={!isReportPage ? styles.balanceInput : styles.balanceInputReport}
                autoComplete="off"
              />
              <button
                className={!isReportPage ? styles.balanceButton : styles.report}
                type="submit"
                onClick={onSubmit}
              >
                подтвердить
              </button>
            </>
          ) : (
            <div className={!isReportPage ? styles.balanceButton : styles.reportForm}>
              <p className={!isReportPage ? styles.balanceInput : styles.balanceInputReport}>
                {`${balance.toLocaleString('ru')}.00`} UAH
              </p>
              <button
                className={!isReportPage ? styles.balanceButton : styles.report}
                type="submit"
                disabled
              >
                подтвердить
              </button>
            </div>
          )}
        </div>
      </label>
    </form>
  );
};

export default Balance;
