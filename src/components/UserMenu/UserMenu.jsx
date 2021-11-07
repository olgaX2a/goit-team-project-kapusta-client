import Avatar from 'react-avatar';
import { ReactComponent as LogOutIcon } from '../../assets/logout.svg';
import styles from './UserMenu.module.scss';

function UserMenu() {
  return (
    <div className={styles.container}>
      <Avatar name="Test User" unstyled={true} className={styles.avatar} />
      <span className={styles.userNameText}>Test User</span>
      <button type="button" className={styles.logOutBtn}>
        <LogOutIcon className={styles.logOutIcon} />
        <span className={styles.logOutText}>Выйти</span>
      </button>
    </div>
  );
}

export default UserMenu;

//TO BE ADDED (when auth store and reducer is ready):

// import { useDispatch, useSelector } from 'react-redux';
// import { authSelectors, authOperations } from '../../redux/auth';
// import Avatar from 'react-avatar';
// import { ReactComponent as LogOutIcon } from '../../assets/logout.svg';
// import styles from './UserMenu.module.scss';

// function UserMenu() {
//   const dispatch = useDispatch();
//   const name = useSelector(authSelectors.getUsername);

//   return (
//     <div className={styles.container}>
//       <Avatar name={name} unstyled={true} className={styles.avatar} />
//       <span className={styles.userNameText}>{name}</span>
//       <button
//         type="button"
//         onClick={() => dispatch(authOperations.logout())}
//         className={styles.logOutBtn}
//       >
//         <LogOutIcon className={styles.logOutIcon} />
//         <span className={styles.logOutText}>Выйти</span>
//       </button>
//     </div>
//   );
// }
