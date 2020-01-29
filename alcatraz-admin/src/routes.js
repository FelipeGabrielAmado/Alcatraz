import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import SideMenu from './components/SideMenu'

import Dashboard from './pages/Dashboard'
import MoviesList from './pages/Movies/list'
import MovieEdit from './pages/Movies/edit'
import CategoriesList from './pages/Categories/list'
import CategoriesEdit from './pages/Categories/edit'
import CategoriesCreate from './pages/Categories/create'


const Routes = () => (
    <BrowserRouter>
        <SideMenu /> 
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/movies" component={MoviesList} />
                <Route exact path="/movie/edit/:id" component={MovieEdit} />

                <Route exact path="/categories" component={CategoriesList} />
                <Route exact path="/categories/edit/:id" component={CategoriesEdit} />
                <Route exact path="/categories/create" component={CategoriesCreate} />
            </Switch>
    </BrowserRouter>
);

export default Routes;