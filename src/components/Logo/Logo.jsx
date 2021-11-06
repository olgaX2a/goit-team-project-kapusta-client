import styles from './Logo.module.scss';
import { ReactComponent as LogoIcon } from '../../assets/logo.svg';

function Logo() {
  return (
    <a href="#" className={styles.logo} aria-label="Логотип сайта">
      <LogoIcon className={styles.logoIcon} />
    </a>
  );
}

export default Logo;
