import React from 'react';
import {Route} from 'react-router-dom';

export default function PrivateRoute({logged}){
    logged && (<Route exact path="/" component={App}></Route>)
}