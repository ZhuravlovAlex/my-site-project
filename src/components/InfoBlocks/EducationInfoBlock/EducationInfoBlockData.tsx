import React from 'react';

import { FormattedMessage } from 'react-intl';

import { TimbaOld } from '../../Icons';

export type EducationInfoBlockDataType = {
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

export const EducationInfoBlockData = [
  {
    className: 'education_blocks',
    part: <FormattedMessage id="namePart" />,
    title: <FormattedMessage id="postgraduate" />,
    data: '01.11.1997 - 31.10.2000',
    logo: <TimbaOld />,
    values: [
      <FormattedMessage id="postgraduateSpecialization" />,
      // <FormattedMessage id="value2MonbelContent" />,
    ],
    id: 0,
  },
  {
    className: 'education_blocks',
    part: <FormattedMessage id="namePart" />,
    title: <FormattedMessage id="bachelor" />,
    data: '01.09.1992 - 16.06.1997',
    logo: <TimbaOld />,
    values: [
      <FormattedMessage id="bachelorSpecialization" />,
      // <FormattedMessage id="value2MonbelContent" />,
    ],
    id: 1,
  },
];
