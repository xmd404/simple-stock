
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import StartHerePage from './pages/start-here';

const NotFound = () => <h1>404 not found</h1>

const Router = () =>
    <HashRouter>
        <div>
        <Switch>
            <Route exact path="/" component={StartHerePage} />
            {/* <Route path="/categories/:id" component={CategoryScreenContainer} /> */}
            <Route path="*" component={NotFound} />
        </Switch>
        </div>
    </HashRouter>

export default Router;