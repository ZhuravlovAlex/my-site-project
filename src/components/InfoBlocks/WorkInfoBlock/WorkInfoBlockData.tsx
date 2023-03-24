import React, { ReactComponentElement } from 'react';

import { FormattedMessage } from 'react-intl';

import {
  Timba,
  OldWood,
  Coswick,
  Monbel,
  VDS,
  HolzLine,
  BSTU,
} from '../../Icons';

export const WorkInfoBlockData = [
  {
    className: 'work_blocks',
    part: <FormattedMessage id="namePart" />,
    title: <FormattedMessage id="monbel" />,
    data: '10.06.2019 – 08.08.2022',
    logo: <Monbel />,
    link: 'https://monbel.by/',
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
    logo: <VDS />,
    link: 'https://vds.group/',
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
    logo: <OldWood />,
    link: '',
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
    logo: <Timba />,
    link: 'https://timbadesign.by/portfolio/',
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
    logo: <HolzLine />,
    link: '',
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
    logo: <Coswick />,
    link: 'https://www.coswick.com/',
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
    logo: <BSTU />,
    link: 'https://www.belstu.by/',
    values: [
      <FormattedMessage id="value1bstuContent" />,
      <FormattedMessage id="value2bstuContent" />,
    ],
    id: 6,
  },
];
