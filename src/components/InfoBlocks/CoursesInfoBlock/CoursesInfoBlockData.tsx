import React from 'react';

import { FormattedMessage } from 'react-intl';

import {
  Andersen,
  Epam,
  Fitness,
  IPM,
  MGLU,
  ResultSchool,
  RSS,
  Timba,
} from '../../Icons';

export const CoursesInfoBlockData = [
  {
    className: 'courses_blocks',
    part: <FormattedMessage id="namePart" />,
    // title: <FormattedMessage id="" />,
    courses: [
      {
        value: <FormattedMessage id="coursesAndersenLabInternship" />,
        data: '01.10.2022 - present',
        logo: <Andersen />,
        link: 'https://www.andersenlab.com',
      },
      {
        value: <FormattedMessage id="coursesAndersenLabTrainee" />,
        data: '01.2.2023 - present',
        logo: <Andersen />,
        link: 'https://www.andersenlab.com',
      },
      {
        value: <FormattedMessage id="coursesRSS" />,
        data: '15.09.2021 - 12.09.2022',
        logo: <RSS />,
        link: 'https://rs.school',
      },
      {
        value: <FormattedMessage id="coursesCSB" />,
        data: '04.06.2021 - 08.08.2021',
        logo: <Epam />,
        link: 'https://learn.epam.com/detailsPage?id=07464fe7-306f-4aa2-abdb-fb81ba509124',
      },
      {
        value: <FormattedMessage id="coursesVM" />,
        data: '12.08.2020 - 15.07.2021',
        logo: <ResultSchool />,
        link: 'https://result.school/',
      },
      {
        value: <FormattedMessage id="coursesFitness" />,
        data: '17.04.2018 - 23.09.2018',
        logo: <Fitness />,
        link: 'https://fitnessacademy.by/',
      },
      {
        value: <FormattedMessage id="coursesIPMProduction" />,
        data: '24.05.2006 - 24.06.2006',
        logo: <IPM />,
        link: 'https://ebp.by/kompanii/biznes-shkola-ipm-stante-uspeshnyim-liderom/',
      },
      {
        value: <FormattedMessage id="coursesIPMOptimization" />,
        data: '02.03.2006 - 22.04.2006',
        logo: <IPM />,
        link: 'https://ebp.by/kompanii/biznes-shkola-ipm-stante-uspeshnyim-liderom/',
      },
      {
        value: <FormattedMessage id="coursesEnglish" />,
        data: '01.10.2003 - 16.06.2005',
        logo: <MGLU />,
        link: 'https://mslu.by/',
      },
    ],
    id: 0,
  },
];
