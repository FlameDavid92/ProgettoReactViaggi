import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NoPage from './components/NoPage/NoPage';
require('typeface-roboto')

ReactDOM.render(
  <BrowserRouter>
    
      <PrivateRoute logged={true}/>
      <Route path="/**" component={NoPage}></Route>
    
  </BrowserRouter>,
  document.getElementById('root')
);


