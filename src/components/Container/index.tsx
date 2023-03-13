import React from 'react';

import { PersonalInfoBlock } from '../PersonalInfoBlock';

import { Header } from '../Header';

import { WorkInfoBlock } from '../WorkInfoBlock';

import styles from './Container.module.css';
import { LanguageButtons } from '../../uikit/LanguageButton';

// type ContainerProps = {
//   children: React.ReactNode;
// };

export const Container = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <PersonalInfoBlock />
      {/* <LanguageButtons /> */}
      <WorkInfoBlock />
      {/* <WorkInfoBlock blockName={''} /> */}
    </div>
  );
};
