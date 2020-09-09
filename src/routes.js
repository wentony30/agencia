import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Site from './pages/Site'
import Login from './pages/login'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Site} />
            <Route path="/login" component={Login} />
        </Switch>
    </BrowserRouter>
);

export default Routes;