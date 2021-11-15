import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import { ReactComponent as EmailIcon } from '../../assets/email.svg';
import styles from './RegisterModal.module.scss';

const modalRoot = document.querySelector('#register-modal-root');

class RegisterModal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      const { onModalClose } = this.props;
      onModalClose();
    }
  };

  handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      const { onModalClose } = this.props;
      onModalClose();
    }
  };

  render() {
    const { onModalClose } = this.props;
    return createPortal(
      <div
        role="button"
        tabIndex={0}
        className={styles.modalOverlay}
        onClick={this.handleOverlayClick}
        onKeyDown={this.handleOverlayClick}
      >
        <div className={styles.modalContent}>
          <button
            type="button"
            onClick={onModalClose}
            className={styles.closeModalBtn}
            aria-label="Close Modal"
          />
          <p className={styles.modalText}>
            На Вашу почту был отправлен верификационный имейл, пожалуйста, проверьте папку Входящие
            или Спам и перейдите по ссылке.
          </p>
          <EmailIcon className={styles.emailIcon} />
          <p className={styles.modalText}>Далее нажмите Войти чтобы авторизоваться:</p>
          <div className={styles.loginLinkWrapper}>
            <NavLink exact="true" to="/login" className={styles.loginBtn}>
              Войти
            </NavLink>
          </div>
        </div>
      </div>,
      modalRoot,
    );
  }
}

export default RegisterModal;

RegisterModal.propTypes = {
  onModalClose: PropTypes.func.isRequired,
};
