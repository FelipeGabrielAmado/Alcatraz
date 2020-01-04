import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Main from './pages/main'
import Movie from './pages/movie'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route exact path="/movie/:id" component={Movie}></Route>
        </Switch>
    </BrowserRouter>
  );
  
  export default Routes;