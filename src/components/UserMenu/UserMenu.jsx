import React, { useState } from 'react';
import Avatar from 'react-avatar';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/named
import { authSelectors, authOperations } from '../../redux/auth';
import { ReactComponent as LogOutIcon } from '../../assets/logout.svg';
import Modal from '../shared/Modal/Modal';

import styles from './UserMenu.module.scss';

const UserMenu = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const name = useSelector(authSelectors.getUserName);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.container}>
      <Avatar name={name} unstyled="true" className={styles.avatar} />
      <span className={styles.userNameText}>{name}</span>
      <button type="button" className={styles.logOutBtn} onClick={toggleModal}>
        <LogOutIcon className={styles.logOutIcon} />
        <p className={styles.logOutText}>Выйти</p>
      </button>
      {isModalOpen && (
        <Modal
          title="Вы действительно хотите выйти?"
          onNo={toggleModal}
          onYes={() => dispatch(authOperations.logout())}
        />
      )}
    </div>
  );
};

export default UserMenu;
