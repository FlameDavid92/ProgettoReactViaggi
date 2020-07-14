import React from 'react';
import { creaUtenteDef } from '../../utils';
import './login.css';

export default function Login() {
    const utente = creaUtenteDef();
    
    return (<>
    <div className="container login-container">
        <div className="row">
            <div className="col-8 offset-2 login-form-1">
                <form className="text-center" onSubmit={checkLogin}>
                    <img className="big-logo" alt="logo" src="./logo.png"/>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Email *" value="" required/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password *" value="" required/>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btnSubmit" value="Login" />
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>)
}