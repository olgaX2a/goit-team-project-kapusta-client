import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../../assets/logo.svg';
import styles from './Logo.module.scss';

function Logo() {
  return (
    <NavLink exact to="/" className={styles.logoLink}>
      <LogoIcon className={styles.logoIcon} />
    </NavLink>
  );
}

export default Logo;
