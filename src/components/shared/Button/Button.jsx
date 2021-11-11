import React from 'react';

import styles from './Button.module.scss';

const Button = ({ text, btnAction }) => {
  return (
    <div>
      <button type="button" className={styles.button} onClick={btnAction}>
        {text}
      </button>
    </div>
  );
};

export default Button;
