import React from 'react';

import { FormattedMessage } from 'react-intl';

import { TimbaOld } from '../../Icons';

export type CoursesInfoBlockDataType = {
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

export const CoursesInfoBlockData = [
  {
    className: 'courses_blocks',
    part: <FormattedMessage id="namePart" />,
    title: <FormattedMessage id="" />,
    data: '',
    logo: '',
    values: [
      <FormattedMessage id="coursesAndersenLabInternship" />,
      <FormattedMessage id="coursesAndersenLabTrainee" />,
      <FormattedMessage id="coursesRSS" />,
      <FormattedMessage id="coursesCSB" />,
      <FormattedMessage id="coursesVM" />,
      <FormattedMessage id="coursesFitness" />,
      <FormattedMessage id="coursesIPMProduction" />,
      <FormattedMessage id="coursesIPMOptimization" />,
      <FormattedMessage id="coursesEnglish" />,
    ],
    id: 0,
  },
];
