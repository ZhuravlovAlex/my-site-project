import React from 'react';

import styles from './WorkInfoBlock.module.css';

import { FormattedMessage, useIntl } from 'react-intl';

type WorkInfoBlockProps = {
  blockName: string;
};

export const WorkInfoBlock = ({ blockName }: WorkInfoBlockProps) => {
  const intl = useIntl();

  return (
    <>
      <div className={styles.block_name}>
        {intl.formatMessage({ id: blockName })}
        <FormattedMessage id="blockName" />
      </div>
      <div className={styles.workInfoBlock_wrapper}>
        <div className={styles.workInfoBlock_content}></div>
      </div>
    </>
  );
};
