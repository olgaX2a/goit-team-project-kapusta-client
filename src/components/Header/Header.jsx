import { AppBar } from '@mui/material';
import Logo from '../Logo/Logo';
import UserMenu from '../UserMenu/UserMenu';
import styles from './Header.module.scss';

function Header() {
  return (
    <AppBar color="transparent" elevation={0} style={{ height: '56px' }}>
      <div className={styles.header}>
        <Logo />
        <UserMenu />
      </div>
    </AppBar>
  );
}

export default Header;
