// import { NavLink } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../../assets/logo.svg';
import styles from './Logo.module.scss';

function Logo() {
  return (
    <a href="#" className={styles.logoLink} aria-label="Логотип сайта">
      <LogoIcon className={styles.logoIcon} />
    </a>
  );
  // return (
  //   <NavLink exact to="/" className={styles.logoLink}>
  //     <LogoIcon className={styles.logoIcon} />
  //   </NavLink>
  // );
}

export default Logo;
