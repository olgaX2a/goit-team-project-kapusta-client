import { useFormik } from 'formik';
import * as Yup from 'yup';
import { authOperations } from '../../redux/auth';
import { ReactComponent as GoogleIcon } from '../../assets/google-icon.svg';
import { useDispatch } from 'react-redux';
import styles from './RegisterForm.module.scss';

function RegisterForm() {
  const dispatch = useDispatch();
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
    onSubmit: values => {
      dispatch(
        authOperations.register({
          name: values.name,
          email: values.email,
          password: values.password,
        }),
      );
      values = { name: '', email: '', password: '' };

      // values.name = '',
      // values.email = '',
      // values.password='',
    },
  });

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   dispatch(authOperations.register({ name, email, password }));
  //   setName('');
  //   setEmail('');
  //   setPassword('');
  // };

  return (
    <div className={styles.formContainer}>
      <p className={styles.formText}>Вы можете авторизоваться с помощью Google Account:</p>
      <button
        type="button"
        className={styles.googleBtn}
        // onClick={() => console.log('googleLogin function')}
      >
        <GoogleIcon />
        <span className={styles.googleBtnText}>Google</span>
      </button>
      <p className={styles.formUsualLoginText}>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </p>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <label htmlFor="email" className={styles.formInputLabel}>
          Имя:
        </label>
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
        {formik.touched.name && formik.errors.name ? (
          <div className={styles.inputErrorText}>{formik.errors.name}</div>
        ) : null}
        <label htmlFor="email" className={styles.formInputLabel}>
          Электронная почта:
        </label>
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
        {formik.touched.email && formik.errors.email ? (
          <div className={styles.inputErrorText}>{formik.errors.email}</div>
        ) : null}
        <label htmlFor="password" className={styles.formInputLabel}>
          Пароль:
        </label>
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
        {formik.touched.password && formik.errors.password ? (
          <div className={styles.inputErrorText}>{formik.errors.password}</div>
        ) : null}
        <div className={styles.formButtonsContainer}>
          <button type="submit" className={styles.registerFormBtn}>
            Регистрация
          </button>
          <button
            type="button"
            // onClick={() => console.log('onClickFunction')}
            className={styles.loginFormBtn}
          >
            Войти
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;

// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { authOperations } from '../../redux/auth';
// import { ReactComponent as GoogleIcon } from '../../assets/google-icon.svg';
// import styles from './RegisterForm.module.scss';

// function RegisterForm() {
//   const dispatch = useDispatch();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleChange = ({ target: { name, value } }) => {
//     switch (name) {
//       case 'name':
//         return setName(value);
//       case 'email':
//         return setEmail(value);
//       case 'password':
//         return setPassword(value);
//       default:
//         return;
//     }
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     dispatch(authOperations.register({ name, email, password }));
//     setName('');
//     setEmail('');
//     setPassword('');
//   };

//   return (
//     <div className={styles.formContainer}>
//       <p className={styles.formText}>Вы можете авторизоваться с помощью Google Account:</p>
//       <button
//         type="button"
//         className={styles.googleBtn}
//         // onClick={() => console.log('googleLogin function')}
//       >
//         <GoogleIcon />
//         <span className={styles.googleBtnText}>Google</span>
//       </button>
//       <p className={styles.formUsualLoginText}>
//         Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
//       </p>
//       <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
//         <label className={styles.formInputLabel}>
//           Имя:
//           <br />
//           <input
//             type="name"
//             name="name"
//             value={name}
//             placeholder="Имя Фамилия"
//             className={styles.formInput}
//             onChange={handleChange}
//           />
//         </label>
//         <label className={styles.formInputLabel}>
//           Электронная почта:
//           <input
//             type="email"
//             name="email"
//             value={email}
//             placeholder="your@email.com"
//             className={styles.formInput}
//             onChange={handleChange}
//           />
//         </label>

//         <label className={styles.formInputLabel}>
//           Пароль:
//           <br />
//           <input
//             type="password"
//             name="password"
//             value={password}
//             placeholder="Пароль"
//             className={styles.formInput}
//             onChange={handleChange}
//           />
//         </label>
//         <div className={styles.formButtonsContainer}>
//           <button type="submit" className={styles.registerFormBtn}>
//             Регистрация
//           </button>
//           <button
//             type="button"
//             // onClick={() => console.log('onClickFunction')}
//             className={styles.loginFormBtn}
//           >
//             Войти
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default RegisterForm;
