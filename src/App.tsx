import React, { FC, useState } from 'react';

import { Header } from '@src/components/header/Header';
import { Button } from '@src/components/button/Button';

import styles from './app.module.scss';

const NAMES = ['John', 'Pete', 'Mia'];

export const App: FC = () => {
  const [stateCnt, setStateCnt] = useState<number>(6);
  const [stateName, setStateName] = useState<string>('sdf');

  return (
    <div className={styles.container}>
      <Header counter={stateCnt} name={stateName} />

      <main>
        <div className={styles.buttons}>
          <div className={styles.block}>
            <Button type='button' onClick={() => setStateCnt((prevState) => prevState + 1)}>
              Incr
            </Button>

            <Button type='button' onClick={() => setStateCnt((prevState) => prevState - 1)}>
              Decr
            </Button>
          </div>

          <div className={styles.block}>
            {NAMES.map((name, i) => (
              <Button key={i} type='button' onClick={() => setStateName(name)}>
                {name}
              </Button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
