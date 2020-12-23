import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import Navbar from './components/navbar';

import PageNotFound from './pages/404';
import HomePage from './pages/home';
import DiscoverPage from './pages/discover';
import ProfilePage from './pages/profile';
import StockChartContainer from './components/charts/StockChartContainer';
import CryptoChartContainer from './components/charts/CryptoChartContainer';
// import ForexChart from './components/charts/forex';

const Router = () =>
  <HashRouter>
    <Header />
    <div className="header-padding">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/discover/" component={DiscoverPage} />
        <Route path="/profile/" component={ProfilePage} />
        <Route path="/chart/stock/:id/" component={StockChartContainer} />
        <Route path="/chart/crypto/:id/:name/" component={CryptoChartContainer} />
        {/* <Route path="/chart/forex/:id/:name" component={ForexChart} /> */}
        <Route path="*" component={PageNotFound} />
      </Switch>
      <Footer />
    </div>
    <Navbar />
  </HashRouter>

export default Router;