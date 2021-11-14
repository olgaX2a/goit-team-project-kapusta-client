import React from 'react';
import PropTypes from 'prop-types';
import styles from './Paper.module.scss';

function Paper({ children, extraStyles }) {
  return <div className={[styles.paper, extraStyles].join(' ')}>{children}</div>;
}

export default Paper;

Paper.defaultProps = {
  extraStyles: '',
};

Paper.propTypes = {
  children: PropTypes.node.isRequired,
  extraStyles: PropTypes.string,
};
