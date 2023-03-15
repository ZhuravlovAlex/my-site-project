import React, { useState } from 'react';

import { FormattedMessage, useIntl } from 'react-intl';

import { SkillsInfoBlockData } from './SkillsInfoBlockData';

import styles from './SkillsInfoBlock.module.css';

export const CoursesInfoBlock = () => {
  const [blockContent, setBlockContent] = useState(SkillsInfoBlockData);

  const intl = useIntl();

  return (
    <>
      <div className={styles.block_name}>
        <FormattedMessage id="skillsBlockName" />
      </div>
      {blockContent.map((skillsInfo, index) => (
        <div className={styles.skillsInfoBlock_wrapper} key={skillsInfo.id}>
          <div className={styles.skillsInfoBlock_container}>
            <div className={styles.skillsInfoBlock_title}>
              {skillsInfo.title}
            </div>
            <div className={styles.skillsInfoBlock_data}>{skillsInfo.data}</div>
            <div className={styles.skillsInfoBlock_infoBlock}>
              {skillsInfo.values.map((value) => (
                <div>{value}</div>
              ))}
            </div>
          </div>
          <div className={styles.skillsInfoBlock_logo}>{skillsInfo.logo}</div>
        </div>
      ))}
    </>
  );
};
