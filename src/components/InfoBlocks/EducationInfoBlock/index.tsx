import React, { useState } from 'react';

import { FormattedMessage, useIntl } from 'react-intl';

import { EducationInfoBlockData } from './EducationInfoBlockData';

import styles from './EducationInfoBlock.module.css';

export const EducationInfoBlock = () => {
  const [blockContent, setBlockContent] = useState(EducationInfoBlockData);

  const intl = useIntl();

  return (
    <>
      <div className={styles.block_name}>
        <FormattedMessage id="educationBlockName" />
      </div>
      {blockContent.map((educationInfo, index) => (
        <div
          className={styles.educationInfoBlock_wrapper}
          key={educationInfo.id}
        >
          <div className={styles.educationInfoBlock_container}>
            <div className={styles.educationInfoBlock_title}>
              {educationInfo.title}
            </div>
            <div className={styles.educationInfoBlock_data}>
              {educationInfo.data}
            </div>
            <div className={styles.educationInfoBlock_infoBlock}>
              {educationInfo.values.map((value) => (
                <div>{value}</div>
              ))}
            </div>
          </div>
          <div className={styles.educationInfoBlock_logo}>
            {educationInfo.logo}
          </div>
        </div>
      ))}
    </>
  );
};
