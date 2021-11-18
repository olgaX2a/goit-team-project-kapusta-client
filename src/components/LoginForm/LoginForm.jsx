import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line import/named
import { authOperations } from '../../redux/auth';
import GoogleAuth from '../GoogleAuth/GoogleAuth';
import styles from './LoginForm.module.scss';

function LoginForm() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters.')
        .required('Password is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(
        authOperations.login({
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
      <GoogleAuth />
      <p className={styles.formUsualLoginText}>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </p>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
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
          <button type="submit" className={styles.loginFormBtn}>
            Войти
          </button>
          <NavLink exact to="/register" className={styles.registerFormBtn}>
            Регистрация
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
