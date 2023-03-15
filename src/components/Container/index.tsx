import React from 'react';

import { PersonalInfoBlock } from '../InfoBlocks/PersonalInfoBlock';

import { Header } from '../Header';

import { WorkInfoBlock } from '../InfoBlocks/WorkInfoBlock';

import { LanguageButtons } from '../../uikit/LanguageButton';

import { EducationInfoBlock } from '../InfoBlocks/EducationInfoBlock';

import styles from './Container.module.css';
import { CoursesInfoBlock } from '../InfoBlocks/CoursesInfoBlock/Index';
// type ContainerProps = {
//   children: React.ReactNode;
// };

export const Container = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <PersonalInfoBlock />
      <WorkInfoBlock />
      <EducationInfoBlock />
      <CoursesInfoBlock />
    </div>
  );
};
