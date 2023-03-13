import React from 'react';
import { LanguageButtons } from '../../uikit/LanguageButton';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.header} id="header">
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.logo} id="logo">
            <a className={styles.link} href=""></a>
          </div>
          <div className={styles.search} id="search">
            <div className={styles.search_wrapper}>
              <div className={styles.search_input_container}>
                <form action="" className="search_input_form--is-expanded">
                  <input
                    className={styles.search_input}
                    name="s"
                    autoComplete="off"
                    data-swplive="true"
                    type="text"
                    placeholder="Search"
                  />
                  <img className={styles.search_icon} src="" />
                </form>
              </div>
            </div>
          </div>
          <LanguageButtons />
          <div className={styles.burger_menu} id="burger-menu"></div>
        </div>
      </div>
    </div>
  );
};
