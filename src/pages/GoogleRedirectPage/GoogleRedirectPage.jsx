import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import styles from './GoogleRedirectPage.module.scss';

function GoogleRedirectPage() {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const googleURLToken = new URLSearchParams(location.search).get('access_token');

  useEffect(() => {
    dispatch(authOperations.fetchGoogleUser(googleURLToken));
    history.push('/');
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Please wait a second...</h2>
      <p className={styles.text}>You will be connected to Kapu&#36;ta very soon.</p>
    </div>
  );
}

export default GoogleRedirectPage;
