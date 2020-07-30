import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import Navbar from './components/navbar';

import PageNotFound from './pages/404';
import HomePage from './pages/home';
import DiscoverPage from './pages/discover';
import ProfilePage from './pages/profile';
import StockChart from './components/charts/stock';
import CryptoChart from './components/charts/crypto';
// import ForexChart from './components/charts/forex';

const Router = () =>
  <HashRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/discover" component={DiscoverPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/chart/stock/:id" component={StockChart} />
      <Route path="/chart/crypto/:id" component={CryptoChart} />
      {/* <Route path="/chart/forex/:id" component={ForexChart} /> */}
      <Route path="*" component={PageNotFound} />
    </Switch>
    <Footer />
    <Navbar />
  </HashRouter>

export default Router;