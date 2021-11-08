import React from 'react';

import styles from './Button.module.scss';

const Button = ({ text, btnAction }) => {
  const onClickAction = e => {
    e.preventDefault();
    btnAction();
    e.target.blur();
  };

  return (
    <div>
      <button type="button" className={styles.button} onClick={onClickAction}>
        {text}
      </button>
    </div>
  );
};

export default Button;
