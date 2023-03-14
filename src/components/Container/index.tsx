import React from 'react';

import { PersonalInfoBlock } from '../PersonalInfoBlock';

import { Header } from '../Header';

import { WorkInfoBlock } from '../WorkInfoBlock';

import { LanguageButtons } from '../../uikit/LanguageButton';

import { EducationInfoBlock } from '../EducationInfoBlock';

import styles from './Container.module.css';
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
      <EducationInfoBlock />
      {/* <WorkInfoBlock blockName={''} /> */}
    </div>
  );
};
