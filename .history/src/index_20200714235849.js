import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './components/Login/Login';
import NoPage from './components/NoPage/NoPage';
require('typeface-roboto')
require('js-sha512');

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {(JSON.parse(window.sessionStorage.getItem('user')) !== null) ? (<Route exact path="/" component={App}/>)
      :(<Route exact path="/" component={Login}/>)}
      <Route path="**" component={NoPage}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


