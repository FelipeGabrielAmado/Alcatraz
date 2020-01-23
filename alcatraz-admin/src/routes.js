import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import SideMenu from './components/SideMenu'

import Dashboard from './pages/Dashboard'
import Movies from './pages/Movies'
import Categories from './pages/Categories'


const Routes = () => (
    <BrowserRouter>
        <SideMenu /> 
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/movies" component={Movies} />
                <Route exact path="/categories" component={Categories} />
            </Switch>
    </BrowserRouter>
);

export default Routes;