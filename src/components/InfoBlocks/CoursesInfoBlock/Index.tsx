import React, { useState } from 'react';

import { FormattedMessage, useIntl } from 'react-intl';

import { CoursesInfoBlockData } from './CoursesInfoBlockData';

import styles from './CoursesInfoBlock.module.css';

export const CoursesInfoBlock = () => {
  const [blockContent, setBlockContent] = useState(CoursesInfoBlockData);

  const intl = useIntl();

  return (
    <>
      <div className={styles.block_name}>
        <FormattedMessage id="coursesBlockName" />
      </div>
      {blockContent.map((coursesInfo, index) => (
        <div className={styles.coursesInfoBlock_wrapper} key={coursesInfo.id}>
          <div className={styles.coursesInfoBlock_container}>
            <div className={styles.coursesInfoBlock_title}>
              {coursesInfo.title}
            </div>
            <div className={styles.coursesInfoBlock_data}>
              {coursesInfo.data}
            </div>
            <div className={styles.coursesInfoBlock_infoBlock}>
              {coursesInfo.values.map((value) => (
                <div>{value}</div>
              ))}
            </div>
          </div>
          <div className={styles.coursesInfoBlock_logo}>{coursesInfo.logo}</div>
        </div>
      ))}
    </>
  );
};
