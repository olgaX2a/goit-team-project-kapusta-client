import { AppBar } from '@mui/material';
import Logo from '../Logo/Logo';
import UserMenu from '../UserMenu/UserMenu';
import styles from './Header.module.scss';

function Header() {
  return (
    <AppBar color="transparent" elevation={0} style={{ height: '56px' }}>
      <div className={styles.header}>
        <Logo />
        <UserMenu />
      </div>
    </AppBar>
  );
}

export default Header;

//TO BE ADDED (when auth store and reducer is ready):
// import { useSelector } from "react-redux";
// import { AppBar } from '@mui/material';
// import Logo from '../Logo/Logo';
// import UserMenu from '../UserMenu/UserMenu';
// import { authSelectors } from "redux/auth";
// import styles from './Header.module.scss';

// function Header() {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//   return (
//     <AppBar color="transparent" elevation={0} style={{ height: '56px' }}>
//       <div className={styles.header}>
//         <Logo />
//         {isLoggedIn && <UserMenu />}
//       </div>
//     </AppBar>
//   );
// }

// export default Header;
