import React from 'react';
import { useSelector } from 'react-redux';
import { AppBar } from '@mui/material';
import Logo from '../Logo/Logo';
import UserMenu from '../UserMenu/UserMenu';
// eslint-disable-next-line import/named
import { authSelectors } from '../../redux/auth';
import styles from './Header.module.scss';

function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <AppBar color="transparent" elevation={0} style={{ height: '56px' }}>
      <div className={styles.header}>
        <Logo />
        {isLoggedIn && <UserMenu />}
      </div>
    </AppBar>
  );
}

export default Header;
