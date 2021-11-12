import React, { useState } from 'react';

import styles from './Balance.module.scss';
import Notification from '../shared/Notification/Notification';

const Balance = () => {
  // поменять значение баланса, когда будет путь суммы с бэка
  const balance = 10;

  const [NotificationOpen, setNotificationOpen] = useState(true);

  const onHandleChange = () => {
    console.log('Дописать функцию обновления баланса');
  };

  const removeNotification = () => {
    setNotificationOpen(false);
  };

  return (
    <form className={styles.balanceForm}>
      <label htmlFor="balance" className={styles.balanceLabel}>
        Баланс:
        <div className={styles.buttonsGroup}>
          {balance === 0 ? (
            <>
              {NotificationOpen && <Notification onClick={removeNotification} />}
              <input
                type="number"
                step="0.01"
                name="name"
                maxLength="10"
                placeholder="00.00"
                onChange={removeNotification}
                className={styles.balanceInput}
                autoComplete="off"
              />
              <button className={styles.balanceButton} type="submit" onClick={onHandleChange}>
                подтвердить
              </button>
            </>
          ) : (
            <>
              <p className={styles.balanceInput}>{`${balance.toLocaleString('ru')}.00`} UAH</p>
              <button className={styles.balanceButton} type="submit" disabled>
                подтвердить
              </button>
            </>
          )}
        </div>
      </label>
    </form>
  );
};

export default Balance;
