import { ReactComponent as LogoIcon } from '../../assets/logo.svg';
import styles from './Logo.module.scss';

function Logo() {
  return (
    <a href="https://www.google.com/" className={styles.logo} aria-label="Логотип сайта">
      <LogoIcon className={styles.logoIcon} />
    </a>
  );
}

export default Logo;
