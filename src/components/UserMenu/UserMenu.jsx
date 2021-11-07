import Avatar from 'react-avatar';
import { ReactComponent as LogOutIcon } from '../../assets/logout.svg';
import styles from './UserMenu.module.scss';

function UserMenu() {
  return (
    <div className={styles.container}>
      <Avatar name="Test User" unstyled={true} className={styles.avatar} />
      <span className={styles.userNameText}>Test User</span>
      <a type="button" className={styles.logOutBtn}>
        <LogOutIcon className={styles.logOutIcon} />
        <span className={styles.logOutText}>Выйти</span>
      </a>
    </div>
  );
}

export default UserMenu;
