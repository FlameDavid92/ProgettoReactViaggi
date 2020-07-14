import React from 'react';
import { creaUtenteDef } from '../../utils';
import './login.css';

export default function Login() {
    const utente = creaUtenteDef();
    return (<>
    <div class="container login-container">
        <div className="row align-items-center">
            <div class="col-8 offset-2 login-form-1">
                <form>
                <img alt="logo" src="./logo.png"/>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Email *" value="" required/>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="Password *" value="" required/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btnSubmit" value="Login" />
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>)
}