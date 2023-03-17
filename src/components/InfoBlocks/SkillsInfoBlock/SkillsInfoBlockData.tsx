import React from 'react';

import { FormattedMessage } from 'react-intl';

import { Timba } from '../../Icons';

export type SkillsInfoBlockDataType = {
  className: string;
  part: string | null;
  title: string;
  data: Date;
  value1: string;
  value2: string;
  value3: string;
  value4: string;
  value5: string;
  value6: string;
  value7: string;
  value8: string;
};

export const SkillsInfoBlockData = [
  {
    className: 'skills_blocks',
    part: <FormattedMessage id="namePart" />,
    title: <FormattedMessage id="" />,
    data: '',
    logo: '',
    values: [
      <FormattedMessage id="skills" />,
      <FormattedMessage id="skills" />,
      <FormattedMessage id="skills" />,
      <FormattedMessage id="skills" />,
      <FormattedMessage id="skills" />,
      <FormattedMessage id="skills" />,
      <FormattedMessage id="skills" />,
      <FormattedMessage id="skills" />,
      <FormattedMessage id="skills" />,
    ],
    id: 0,
  },
];
