import React, { useState } from 'react';

import { FormattedMessage, useIntl } from 'react-intl';

import { WorkInfoBlockData } from './WorkInfoBlockData';

import styles from './WorkInfoBlock.module.css';

// type WorkInfoBlockProps = {
//   blockName: string;
// };

// export const WorkInfoBlock = ({ blockName }: WorkInfoBlockProps) => {
export const WorkInfoBlock = () => {
  const [blockContent, setBlockContent] = useState(WorkInfoBlockData);
  // const [valueContent, setValueContent] = useState(ValueContentData);
  const intl = useIntl();

  return (
    <>
      <div className={styles.block_name}>
        {/* {intl.formatMessage({ id: blockName })} */}
        <FormattedMessage id="blockName" />
      </div>
      {blockContent.map((workInfo, index) => (
        <div className={styles.workInfoBlock_wrapper} key={workInfo.id}>
          <div className={styles.workInfoBlock_container}>
            <div className={styles.workInfoBlock_title}>{workInfo.title}</div>
            <div className={styles.workInfoBlock_data}>{workInfo.data}</div>
            <div className={styles.workInfoBlock_infoBlock}>
              <div className={styles.workInfoBlock_logo}></div>
              {workInfo.values.map((value) => (
                <div>{value}</div>
              ))}
            </div>
          </div>
          <div className={styles.workInfoBlock_logo}></div>
        </div>
      ))}
    </>
  );
};
