import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/named
import { authOperations, authSelectors } from '../../redux/auth';
import { ReactComponent as GoogleIcon } from '../../assets/google-icon.svg';
import RegisterModal from '../RegisterModal/RegisterModal';
import styles from './RegisterForm.module.scss';

function RegisterForm() {
  const dispatch = useDispatch();
  const isRegistered = useSelector(authSelectors.getIsRegistered);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const showModalIfRegistered = () => {
    if (isRegistered) {
      toggleModal();
    }
  };

  useEffect(() => {
    showModalIfRegistered();
  }, [isRegistered]);

  const formik = useFormik({
    initialValues: { name: '', email: '', password: '' },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Please enter your full name. Example: John Smith.')
        .required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters.')
        .required('Password is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(
        authOperations.register({
          name: values.name,
          email: values.email,
          password: values.password,
        }),
      );
      resetForm({ values: '' });
    },
  });

  return (
    <div className={styles.formContainer}>
      <p className={styles.formText}>Вы можете авторизоваться с помощью Google Account:</p>
      <button
        type="button"
        className={styles.googleBtn}
        onClick={() => console.log('googleLogin function')}
      >
        <GoogleIcon />
        <span className={styles.googleBtnText}>Google</span>
      </button>
      <p className={styles.formUsualLoginText}>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </p>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <div className={styles.formInputContainer}>
          <label htmlFor="email" className={styles.formInputLabel}>
            Имя:
            <br />
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Имя Фамилия"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className={styles.formInput}
            />
          </label>
        </div>
        {formik.touched.name && formik.errors.name ? (
          <div className={styles.inputErrorText}>{formik.errors.name}</div>
        ) : null}
        <div className={styles.formInputContainer}>
          <label htmlFor="email" className={styles.formInputLabel}>
            Электронная почта:
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={styles.formInput}
            />
          </label>
        </div>
        {formik.touched.email && formik.errors.email ? (
          <div className={styles.inputErrorText}>{formik.errors.email}</div>
        ) : null}
        <div className={styles.formInputContainer}>
          <label htmlFor="password" className={styles.formInputLabel}>
            Пароль:
            <br />
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Пароль"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={styles.formInput}
            />
          </label>
        </div>
        {formik.touched.password && formik.errors.password ? (
          <div className={styles.inputErrorText}>{formik.errors.password}</div>
        ) : null}
        <div className={styles.formButtonsContainer}>
          <button type="submit" className={styles.registerFormBtn}>
            Регистрация
          </button>
          <NavLink exact="true" to="/login" className={styles.loginFormBtn}>
            Войти
          </NavLink>
        </div>
      </form>
      {isModalOpen && <RegisterModal onModalClose={toggleModal} />}
    </div>
  );
}

export default RegisterForm;
