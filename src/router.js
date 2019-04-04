import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

import PageNotFound from './pages/404';
import StartHerePage from './pages/start-here';
import StocksPage from './pages/stocks';

const Router = () =>
  <HashRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={StartHerePage} />
      <Route path="/stocks" component={StocksPage} />
      {/* <Route path="/categories/:id" component={CategoryScreenContainer} /> */}
      <Route path="*" component={PageNotFound} />
    </Switch>
    <Footer />
  </HashRouter>

export default Router;