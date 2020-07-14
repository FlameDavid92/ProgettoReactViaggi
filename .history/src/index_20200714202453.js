import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
require('typeface-roboto')

ReactDOM.render(
  <BrowserRouter>
      <PrivateRoute logged={true}/>
  </BrowserRouter>,
  document.getElementById('root')
);


