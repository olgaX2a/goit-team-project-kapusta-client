import { ReactComponent as GoogleIcon } from '../../assets/google-icon.svg';
import styles from './LoginForm.module.scss';

function LoginForm() {
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
      <form className={styles.form}>
        <label className={styles.formInputLabel}>
          Электронная почта:
          <input
            type="email"
            name="email"
            // value={email}
            placeholder="your@email.com"
            className={styles.formInput}
            onChange={() => console.log('handleChange function')}
          />
        </label>

        <label className={styles.formInputLabel}>
          Пароль:
          <input
            type="password"
            name="password"
            // value={password}
            placeholder="Пароль"
            className={styles.formInput}
            onChange={() => console.log('handleChange function')}
          />
        </label>
        <div className={styles.formButtonsContainer}>
          <button
            type="submit"
            onSubmit={() => console.log('onSubmitFunction')}
            className={styles.loginFormBtn}
          >
            Войти
          </button>
          <button
            type="submit"
            onSubmit={() => console.log('onRegisterFunction')}
            className={styles.registerFormBtn}
          >
            Регистрация
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
