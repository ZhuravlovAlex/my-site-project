import React from 'react';

import avatar from '../../../uikit/static/avatar.jpg';

import { FormattedMessage } from 'react-intl';

export const mainLogo = avatar;

export type PersonalInfoBlockDataType = {
  className: string;
  part: string | null;
  name: string;
  title: string;
  subTitle: string;
  data: Date;
  address: string;
  email: string;
  apps: string;
};

export const PersonalInfoBlockData = {
  className: 'personal_blocks',
  part: <FormattedMessage id="personalPart" />,
  name: <FormattedMessage id="namePersonalPart" />,
  title1: <FormattedMessage id="personalInfoTitle1" />,
  title2: <FormattedMessage id="personalInfoTitle2" />,
  stackTech: <FormattedMessage id="stackTech" />,
  value: <FormattedMessage id="personalValue" />,
  data: '16.02.2023',
  address: <FormattedMessage id="address" />,
  email: <FormattedMessage id="email" />,
  apps: <FormattedMessage id="apps" />,
  id: 0,
};
