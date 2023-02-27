import React from 'react';

import './App.css';

import { Provider } from './translation/provider';

import { PageRenderer } from '../src/pageRenderer';

export const App = () => (
  <Provider>
    <PageRenderer />
  </Provider>
);
