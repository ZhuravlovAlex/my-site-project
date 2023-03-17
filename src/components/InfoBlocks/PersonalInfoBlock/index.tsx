import React from 'react';

import { mainLogo } from './PersonalInfoBlockData';

import my_foto from '../../../uikit/static/my_foto.jpg';

import { PersonalInfoBlockData } from './PersonalInfoBlockData';

import styles from './PersonalInfoBlock.module.css';

export const PersonalInfoBlock = () => {
  return (
    <div className={styles.personalInfoBlock_wrapper}>
      <div className={styles.personalInfoBlock_content}>
        <div className={styles.personalInfoBlock_img}>
          {/* <img
            src="../../uikit/static/my_foto.jpg"
            alt="Here is my foto"
            className={styles.personalInfoBlock_avatar}
          /> */}
        </div>
        <div className={styles.personalInfoBlock_title1}>
          {PersonalInfoBlockData.title1}
        </div>
        <div className={styles.personalInfoBlock_separateBlock} />
        <div className={styles.personalInfoBlock_address}>
          {PersonalInfoBlockData.address}
        </div>
        <div className={styles.personalInfoBlock_email}>
          {PersonalInfoBlockData.email}
        </div>
        <div className={styles.personalInfoBlock_apps}>
          {PersonalInfoBlockData.apps}
        </div>
      </div>
      <div className={styles.objectiveInfoBlock_content}>
        <div className={styles.objectiveInfoBlock_name}>
          {PersonalInfoBlockData.name}
        </div>

        <div className={styles.objectiveInfoBlock_stack}>
          {PersonalInfoBlockData.stackTech}
        </div>

        <div className={styles.objectiveInfoBlock_separateBlock} />
        <div className={styles.content}>
          <div className={styles.objectiveInfoBlock_title2}>
            {PersonalInfoBlockData.title2}
          </div>
          {/* <div className={styles.objectiveInfoBlock_data}>
            {PersonalInfoBlockData.data}
          </div> */}
          <div className={styles.objectiveInfoBlock_value}>
            {PersonalInfoBlockData.value}
          </div>
        </div>
      </div>
    </div>
  );
};
