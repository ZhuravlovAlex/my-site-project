import React from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { LanguageButtons } from '../../uikit/LanguageButton';
import { Cadillac } from '../Icons';

import styles from './Header.module.css';

export const Header = () => {
  const navigate = useNavigate();
  const handleOnClick = navigate('/');

  return (
    <div className={styles.header} id="header">
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.logo} id="logo">
            <a className={styles.link} onClick={() => handleOnClick} href="/">
              <Cadillac />
            </a>
          </div>
          <div className={styles.langBtn}>
            <LanguageButtons />
          </div>
          <div className={styles.burger_menu} id="burger-menu"></div>
        </div>
      </div>
    </div>
  );
};
