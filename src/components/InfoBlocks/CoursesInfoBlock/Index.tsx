import React, { useState } from 'react';

import { FormattedMessage, useIntl } from 'react-intl';

import { CoursesInfoBlockData } from './CoursesInfoBlockData';

import styles from './CoursesInfoBlock.module.css';
import { Andersen } from '../../Icons';

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
            {coursesInfo.courses.map((course, index) => (
              <div className={styles.coursesInfoBlock_valueBlock} key={index}>
                <div className={styles.coursesInfoBlock_value}>
                  {course.value}
                </div>
                <div className={styles.coursesInfoBlock_dataLogoBlock}>
                  <div className={styles.coursesInfoBlock_data}>
                    {course.data}
                  </div>
                  <div className={styles.coursesInfoBlock_logo}>
                    <a href={course.link} className={styles.link_a}>
                      {course.logo}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
