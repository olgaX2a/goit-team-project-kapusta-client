import { NavLink } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../../assets/logo.svg';
import styles from './Logo.module.scss';

function Logo() {
  return (
    <NavLink exact="true" to="/" className={styles.logoLink}>
      <LogoIcon className={styles.logoIcon} />
    </NavLink>
  );
}

export default Logo;
