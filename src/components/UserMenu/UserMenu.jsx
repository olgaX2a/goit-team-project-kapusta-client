import { style } from '@mui/system';
import Avatar from 'react-avatar';
import { ReactComponent as LogOutIcon } from '../../assets/logout.svg';
import styles from './UserMenu.module.scss';

function UserMenu() {
  return (
    <div className={styles.container}>
      <Avatar name="Test User" unstyled={true} className={styles.avatar} />
      <a className={styles.logOutLink}>
        <LogOutIcon className={styles.logOutIcon} />
      </a>
    </div>
  );
}

export default UserMenu;
