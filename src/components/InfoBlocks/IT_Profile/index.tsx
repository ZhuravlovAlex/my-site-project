import React, { useState } from 'react';

import { FormattedMessage, useIntl } from 'react-intl';

import { IT_ProfileInfoBlockData } from './IT_ProfileInfoBlockData';

import styles from './IT_Profile.module.css';

export const IT_Profile = () => {
  const [blockContent, setBlockContent] = useState(IT_ProfileInfoBlockData);

  const intl = useIntl();

  return (
    <>
      <div className={styles.block_name}>
        <FormattedMessage id="it_ProfileBlockName" />
      </div>

      <div className={styles.it_profileInfoBlock_wrapper}>
        <div className={styles.it_profileInfoBlock_container}>
          <div className={styles.it_profileInfoBlock_title}>
            <FormattedMessage id="it_ProfileBlock_title" />
          </div>
          <div className={styles.it_profileInfoBlock_data}>
            <FormattedMessage id="it_ProfileBlock_value_1" />
          </div>
          <div className={styles.it_profileInfoBlock_data}>
            <FormattedMessage id="it_ProfileBlock_value_2" />
          </div>
          <div className={styles.it_profileInfoBlock_data}>
            <FormattedMessage id="it_ProfileBlock_value_3" />
          </div>
        </div>
      </div>
    </>
  );
};
