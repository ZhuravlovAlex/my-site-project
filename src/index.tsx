import React from 'react';

import ReactDOM, { createRoot } from 'react-dom/client';

import { App } from './App';

import { BrowserRouter, HashRouter } from 'react-router-dom';

import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <HashRouter>
      <>
        <App />
      </>
    </HashRouter>
  </React.StrictMode>
);
