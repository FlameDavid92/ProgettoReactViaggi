import React from 'react';
import { Route,Switch } from 'react-router-dom';
import App from '../../App';
import Login from '../Login/Login';
import NoPage from '../NoPage/NoPage';

export default function PrivateRoute({ logged }) {
    return (
        <Switch>
            logged ? (<Route exact path="/" component={App}></Route>)
            : (<Route exact path="/" component={Login}></Route>)
            <Route path="**" component={NoPage}></Route>
        </Switch>
    )
}