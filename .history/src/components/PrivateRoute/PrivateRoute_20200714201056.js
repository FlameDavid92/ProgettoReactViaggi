import React from 'react';
import {Route} from 'react-router-dom';
import App from '../../App';

export default function PrivateRoute({logged}){
    return(logged ? (<Route exact path="/" component={App}></Route>)
    : (<Route exact path="/" component={Login}></Route>)
    )
}