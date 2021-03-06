import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';

export default function PublicRoute({ children, path, restricted = false }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return <Route path={path}>{shouldRedirect ? <Redirect to="/" /> : children}</Route>;
}

PublicRoute.defaultProps = {
  restricted: false,
  path: '/',
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string,
  restricted: PropTypes.bool,
};
