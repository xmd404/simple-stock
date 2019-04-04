import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import StartHerePage from './pages/start-here';
import PageNotFound from './pages/404';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

const Router = () =>
  <HashRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={StartHerePage} />
      {/* <Route path="/categories/:id" component={CategoryScreenContainer} /> */}
      <Route path="*" component={PageNotFound} />
    </Switch>
    <Footer />
  </HashRouter>

export default Router;