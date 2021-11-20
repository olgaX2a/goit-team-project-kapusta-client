import React from 'react';
import PropTypes from 'prop-types';
import styles from './Container.module.scss';

function Container({ children, extraStyles }) {
  return <div className={[styles.container, extraStyles].join(' ')}>{children}</div>;
}

export default Container;

Container.defaultProps = {
  extraStyles: '',
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  extraStyles: PropTypes.string,
};
