import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App'


ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={App}></Route>
  </BrowserRouter>,
  document.getElementById('root')
);


