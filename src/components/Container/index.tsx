import React, { Children, useState } from 'react';

import { PersonalInfoBlock } from '../InfoBlocks/PersonalInfoBlock';

import { Header } from '../Header';

import { WorkInfoBlock } from '../InfoBlocks/WorkInfoBlock';

import { LanguageButtons } from '../../uikit/LanguageButton';

import { EducationInfoBlock } from '../InfoBlocks/EducationInfoBlock';

import { CoursesInfoBlock } from '../InfoBlocks/CoursesInfoBlock/Index';

import { Footer } from '../Footer';

// import { Modal } from '../../uikit/Modal';

import { BackgroundBlock } from '../BackgroundBlock';

import { BackgroundBlockTwo } from '../BackgroundBlockTwo';

import { IT_Profile } from '../InfoBlocks/IT_Profile';

import styles from './Container.module.css';

export const Container = () => {
  // const [modalFctive, setModalActive] = useState(true);

  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <PersonalInfoBlock />
        <IT_Profile />
        <BackgroundBlockTwo />
        <WorkInfoBlock />
        {/* <button
          className={styles.open_btn}
          onClick={() => setModalActive(true)}
        >
          Open modal window
        </button> */}
        <EducationInfoBlock />
        <BackgroundBlock />
        <CoursesInfoBlock />
      </div>
      <Footer />
      {/* <Modal active={modalFctive} setActive={setModalActive}></Modal> */}
    </>
  );
};
