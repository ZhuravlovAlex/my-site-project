import React, { useState } from 'react';

import './App.css';

import { Provider } from './translation/provider';

import { PageRenderer } from './pageRenderer';

export const App = () => {
  return (
    <>
      <Provider>
        <PageRenderer />
      </Provider>
    </>
  );
};
