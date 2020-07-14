import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import App from './App'
import Login from './components/Login/Login';
import NoPage from './components/NoPage/NoPage';
require('typeface-roboto')

ReactDOM.render(
  <BrowserRouter>
      <Switch>
            {true ? (<Route exact path="/" component={App}></Route>)
            : (<Route exact path="/" component={Login}></Route>)}
            <Route path="**" component={NoPage}></Route>
        </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


