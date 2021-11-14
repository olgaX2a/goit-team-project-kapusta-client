import React from 'react';
import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>404 Page Not Found</h2>
    <p className={styles.text}>Something went wrong! Try it again!</p>
  </div>
);

export default NotFoundPage;
