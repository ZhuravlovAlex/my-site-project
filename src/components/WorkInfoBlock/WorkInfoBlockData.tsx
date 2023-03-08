import React from 'react';

import { FormattedMessage } from 'react-intl';

export type WorkInfoBlockDataType = {
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

// export const ValueContentData = [{}];

export const WorkInfoBlockData = [
  {
    className: 'work_blocks',
    part: <FormattedMessage id="namePart" />,
    title: <FormattedMessage id="monbel" />,
    data: '10.06.2019 – 08.08.2022',
    values: [
      <FormattedMessage id="value1MonbelContent" />,
      <FormattedMessage id="value2MonbelContent" />,
      <FormattedMessage id="value3MonbelContent" />,
    ],
    id: 0,
  },
  {
    className: 'work_blocks',
    part: <FormattedMessage id="namePart" />,
    title: <FormattedMessage id="vdsGroup" />,
    data: '03.04.2018 – 09.06.2019',
    values: [
      <FormattedMessage id="value1vdsGroupContent" />,
      <FormattedMessage id="value2vdsGroupContent" />,
      <FormattedMessage id="value3vdsGroupContent" />,
      <FormattedMessage id="value4vdsGroupContent" />,
    ],
    id: 1,
  },
  {
    className: 'work_blocks',
    part: <FormattedMessage id="namePart" />,
    title: <FormattedMessage id="lesoindustriya" />,
    data: '01.05.2016 – 01.04.2018',
    values: [
      <FormattedMessage id="value1lesoindustriyaContent" />,
      <FormattedMessage id="value2lesoindustriyaContent" />,
      <FormattedMessage id="value3lesoindustriyaContent" />,
      <FormattedMessage id="value4lesoindustriyaContent" />,
    ],
    id: 2,
  },
  {
    className: 'work_blocks',
    part: <FormattedMessage id="namePart" />,
    title: <FormattedMessage id="timberdesign" />,
    data: '01.11.2015 – 30.07.2016',
    values: [
      <FormattedMessage id="value1timberdesignContent" />,
      <FormattedMessage id="value2timberdesignContent" />,
      <FormattedMessage id="value3timberdesignContent" />,
    ],
    id: 3,
  },
  {
    className: 'work_blocks',
    part: <FormattedMessage id="namePart" />,
    title: <FormattedMessage id="holztech" />,
    data: '27.06.2011 – 09.06.2015',
    values: [
      <FormattedMessage id="value1holztechContent" />,
      <FormattedMessage id="value2holztechContent" />,
      <FormattedMessage id="value3holztechContent" />,
    ],
    id: 4,
  },
  {
    className: 'work_blocks',
    part: <FormattedMessage id="namePart" />,
    title: <FormattedMessage id="coswick" />,
    data: '05.09.2005 – 04.03.2010',
    values: [
      <FormattedMessage id="value1coswickContent" />,
      <FormattedMessage id="value2coswickContent" />,
    ],
    id: 5,
  },
  {
    className: 'work_blocks',
    part: <FormattedMessage id="namePart" />,
    title: <FormattedMessage id="bstu" />,
    data: '20.11.1997 – 30.11.2004',
    values: [
      <FormattedMessage id="value1bstuContent" />,
      <FormattedMessage id="value2bstuContent" />,
    ],
    id: 6,
  },
];
