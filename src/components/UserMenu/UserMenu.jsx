import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import Avatar from 'react-avatar';
import { ReactComponent as LogOutIcon } from '../../assets/logout.svg';
import Modal from '../shared/Modal/Modal';

import styles from './UserMenu.module.scss';

const UserMenu = () => {
  // const dispatch = useDispatch();

  const handleLogout = () => {
    console.log('Дописать позже');
    // dispatch(logout());
  };

  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  const toggleModal = e => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.container}>
      <Avatar name={name} unstyled={true} className={styles.avatar} />
      <span className={styles.userNameText}>{name}</span>
      <button type="button" className={styles.logOutBtn} onClick={toggleModal}>
        <LogOutIcon className={styles.logOutIcon} />
        <p className={styles.logOutText}>Выйти</p>
      </button>
      {isModalOpen && (
        <Modal
          title={'Вы действительно хотите выйти?'}
          onNo={toggleModal}
          onYes={() => dispatch(authOperations.logout())}
        />
      )}
    </div>
  );
};

export default UserMenu;
