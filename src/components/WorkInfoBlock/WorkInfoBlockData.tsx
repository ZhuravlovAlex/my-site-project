import React from 'react';

import { FormattedMessage } from 'react-intl';

// export type WorkInfoBlockDataType = {
// 	className: string;
// 	part: string | null;
// 	title: string;
// 	data: Date;
// 	value1: string;
// 	value2: string;
// 	value3: string;
// 	value4: string;
// 	value5: string;
// 	value6: string;
// 	value7: string;
// 	value8: string;
// }

export const WorkInfoBlockData = [
  {
    className: 'work_blocks',
    part: <FormattedMessage id="namePart" />,
    title: <FormattedMessage id="monbel" />,
    data: '10.06.2019 – 08.08.2022',
    value1: <FormattedMessage id="value1MonbelContent" />,
    value2: <FormattedMessage id="value2MonbelConten" />,
    value3: <FormattedMessage id="value3MonbelConten" />,
    value4: <FormattedMessage id="value4MonbelConten" />,
    value5: <FormattedMessage id="value5MonbelConten" />,
    value6: <FormattedMessage id="value6MonbelConten" />,
    value7: <FormattedMessage id="value7MonbelConten" />,
    value8: <FormattedMessage id="value8MonbelConten" />,
  },
];
