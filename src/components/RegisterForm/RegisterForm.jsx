import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { ReactComponent as GoogleIcon } from '../../assets/google-icon.svg';
import styles from './RegisterForm.module.scss';

function RegisterForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

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
      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
        <label className={styles.formInputLabel}>
          Имя:
          <br />
          <input
            type="name"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            placeholder="Имя Фамилия"
            className={styles.formInput}
            onChange={handleChange}
          />
        </label>
        <label className={styles.formInputLabel}>
          Электронная почта:
          <input
            type="email"
            name="email"
            value={email}
            placeholder="your@email.com"
            className={styles.formInput}
            onChange={handleChange}
          />
        </label>

        <label className={styles.formInputLabel}>
          Пароль:
          <br />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Пароль"
            className={styles.formInput}
            onChange={handleChange}
          />
        </label>
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
