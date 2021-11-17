import React from 'react';
import { ReactComponent as GoogleIcon } from '../../assets/google-icon.svg';
import styles from './GoogleAuth.module.scss';

function GoogleAuth() {
  return (
    <a
      href="http://goit-kapusta.herokuapp.com/api/users/google"
      rel="noreferrer"
      target="_blank"
      className={styles.googleBtn}
    >
      <GoogleIcon />
      <span className={styles.googleBtnText}>Google</span>
    </a>
  );
}

export default GoogleAuth;
