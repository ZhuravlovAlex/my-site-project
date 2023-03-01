import React from 'react';

import { PersonalInfoBlock } from './components/PersonalInfoBlock';

import { Container } from './components/Container';

import { PropagateLoader } from 'react-spinners';

import { Header } from './components/Header';

import { Slider } from './components/Slider';

import { Route, Routes, useLocation } from 'react-router-dom';

import './index.css';

export const PageRenderer = () => {
  const { pathname } = useLocation();
  const paths = ['/', '/container'];

  return (
    <>
      <Routes>
        <Route path="" element={<Slider />} />
        <Route path="container" element={<Container />} />
      </Routes>
    </>
  );
};
