import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import Button from '../Button/Button';

import styles from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onNo();
    }
  };

  handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onNo();
    }
  };

  render() {
    const { title, onYes, onNo } = this.props;
    return createPortal(
      <div className={styles.modalOverlay} onClick={this.handleOverlayClick}>
        <div className={styles.modalContent}>
          <button type="button" onClick={onNo} className={styles.closeModalBtn}></button>
          <p className={styles.modalText}>{title}</p>
          <ul className={styles.modalContentWrapper}>
            <li className={styles.btnWrapper}>
              <Button text={'Да'} btnAction={onYes} />
            </li>
            <li className={styles.btnWrapper}>
              <Button text={'Нет'} btnAction={onNo} />
            </li>
          </ul>
        </div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
