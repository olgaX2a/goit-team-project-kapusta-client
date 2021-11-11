import React from 'react';
import styles from './Notification.module.scss';

const Notification = () => (
  <div className={styles.notification}>
    <p className={styles.notification_header}>
      Привет! Для начала работы внеси текущий баланс своего счета!
    </p>
    <p className={styles.notification_text}>
      Ты не можешь тратить деньги пока их у тебя нет :&#41;
    </p>
  </div>
);

export default Notification;
