import React, { useState } from 'react';

import { locales } from './locales';

import { IntlProvider } from 'react-intl';

import { localeContent } from './languages';

export const providerContext = React.createContext({
  isActive: 'en-us',
  setIsActive: (id: string) => {},
});

type ProviderType = {
  children?: React.ReactChild;
};

export const Provider = ({ children }: ProviderType) => {
  const [isActive, setIsActive] = useState(
    localStorage.getItem('locale') || locales.english
  );

  let locale;

  if (isActive === 'en-us') {
    locale = locales.english;
  }
  if (isActive === 'de') {
    locale = locales.german;
  }
  if (isActive === 'pl') {
    locale = locales.polish;
  } else {
    locale = locales.bel;
  }

  return (
    <providerContext.Provider value={{ isActive, setIsActive }}>
      <IntlProvider
        locale={isActive}
        defaultLocale="en"
        messages={localeContent[locale]}
      >
        {children}
      </IntlProvider>
    </providerContext.Provider>
  );
};
