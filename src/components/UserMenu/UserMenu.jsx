import React, { useState } from 'react';
import Avatar from 'react-avatar';
import { ReactComponent as LogOutIcon } from '../../assets/logout.svg';
import Modal from '../shared/Modal/Modal';

import styles from './UserMenu.module.scss';

const UserMenu = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = e => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.container}>
      <Avatar name="Test User" unstyled={true} className={styles.avatar} />
      <span className={styles.userNameText}>Test User</span>
      <button type="button" className={styles.logOutBtn} onClick={toggleModal}>
        <LogOutIcon className={styles.logOutIcon} />
        <p className={styles.logOutText}>Выйти</p>
      </button>
      {isModalOpen && (
        <Modal
          title={'Вы действительно хотите выйти?'}
          onNo={toggleModal}
          onYes={() => console.log('Написать маршрут после разлогинизации')}
        />
      )}
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
