import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar';
import Footer from './components/footer';

import PageNotFound from './pages/404';
import HomePage from './pages/home';
import DiscoverPage from './pages/discover';
import ProfilePage from './pages/profile';
import ChartPage from './pages/charts';
import ThumbBar from './components/thumb-bar';

const Router = () =>
  <HashRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/discover" component={DiscoverPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/chart" component={ChartPage} />
      <Route path="*" component={PageNotFound} />
    </Switch>
    <Footer />
    <ThumbBar />
  </HashRouter>

export default Router;