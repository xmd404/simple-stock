import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar';
import Footer from './components/footer';

import PageNotFound from './pages/404';
import HomePage from './pages/home';
import DataSourcePage from './pages/data-sources';
import ChartPage from './pages/charts';

const Router = () =>
  <HashRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/data-sources" component={DataSourcePage} />
      <Route path="/chart" component={ChartPage} />
      <Route path="*" component={PageNotFound} />
    </Switch>
    <Footer />
  </HashRouter>

export default Router;