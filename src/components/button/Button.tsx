import React, { FC, PropsWithChildren } from 'react';

import styles from './button.module.scss';

interface ButtonProps {
  id?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const { id, onClick, type, children } = props;

  return (
    <button className={styles.button} id={id} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
