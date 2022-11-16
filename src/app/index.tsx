import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { Persional } from './pages/Persional';
import 'antd/dist/antd.css';
import { ManageGroup } from './pages/ManageGrouds';
import ManageProducts from './pages/ManageProducts';
import ManageRose from './pages/ManageRose';

export function App() {
  const { i18n } = useTranslation();
  return (
    <div>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Persional />} />
        <Route path="/quan-ly-nhom" element={<ManageGroup />} />
        <Route path="/quan-ly-san-pham" element={<ManageProducts />} />
        <Route path="/quan-ly-hoa-hong" element={<ManageRose />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <GlobalStyle />
    </div>
  );
}
