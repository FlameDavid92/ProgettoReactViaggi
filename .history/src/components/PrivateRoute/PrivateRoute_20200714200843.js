import React from 'react';

export default function PrivateRoute({logged}){
    logged && (<Route exact path="/" component={App}></Route>)
}