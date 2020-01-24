import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import SideMenu from './components/SideMenu'

import Dashboard from './pages/Dashboard'
import MoviesList from './pages/Movies/list'
import MovieEdit from './pages/Movies/edit'
import CategoriesList from './pages/Categories/list'


const Routes = () => (
    <BrowserRouter>
        <SideMenu /> 
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/movies" component={MoviesList} />
                <Route exact path="/movie/edit/:id" component={MovieEdit} />
                <Route exact path="/categories" component={CategoriesList} />
            </Switch>
    </BrowserRouter>
);

export default Routes;