import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App'
import {BrowserRouter, Route} from 'react-router-dom';
require('typeface-roboto')

ReactDOM.render(
  <BrowserRouter>
    <PrivateRoute/>
    <Route exact path="/" component={App}></Route>
  </BrowserRouter>,
  document.getElementById('root')
);


