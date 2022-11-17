/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';

import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import PersonalPage from './pages/PersonPage';
import GroupsPage from './pages/GroupsPage';
import LayoutConfig from 'components/layouts';
import ProductsPage from './pages/ProductsPage';
import OrdersPage from './pages/OrdersPage';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Quản lý chi nhánh"
        defaultTitle="Quản lý chi nhánh"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <LayoutConfig>
        <Switch>
          <Route
            exact
            path={process.env.PUBLIC_URL + '/'}
            component={PersonalPage}
          />

          <Route
            exact
            path={process.env.PUBLIC_URL + '/groups'}
            component={GroupsPage}
          />

          <Route
            exact
            path={process.env.PUBLIC_URL + '/products'}
            component={ProductsPage}
          />

          <Route
            exact
            path={process.env.PUBLIC_URL + '/orders'}
            component={OrdersPage}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </LayoutConfig>
      <GlobalStyle />
    </BrowserRouter>
  );
}
