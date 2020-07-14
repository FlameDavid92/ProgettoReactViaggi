import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App'
import Login from './components/Login/Login';
import NoPage from './components/NoPage/NoPage';
require('typeface-roboto')

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {false ? (<Route exact path="/" component={App}></Route>)
        : (<Route exact path="/" component={Login}></Route>)}
      <Route path="**" component={NoPage}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


