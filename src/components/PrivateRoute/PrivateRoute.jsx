import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

export default function PrivateRoute({ children, exact, path }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route exact={exact} path={path}>
      {isLoggedIn ? children : <Redirect to="/login" />}
    </Route>
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
};
