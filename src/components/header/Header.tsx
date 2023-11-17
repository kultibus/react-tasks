import React, { FC } from 'react';

import styles from './header.module.scss';

interface HeaderProps {
  counter: number;
  name: string;
}

const Header: FC<HeaderProps> = (args) => {
  const { counter, name } = args;

  return (
    <header className={styles.container}>
      <span>{counter}</span>
      <span>{name}</span>
    </header>
  );
};

export { Header };
