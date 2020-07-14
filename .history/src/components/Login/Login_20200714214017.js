import React from 'react';
import { creaUtenteDef } from '../../utils';
import './login.css';

export default function Login() {
    const utente = creaUtenteDef();
    return (<>
    <div class="container login-container">

        <div className="row">
            <div class="col-6 offset-3 login-form-1">
                <h3>Login for Form 1</h3>
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Your Email *" value="" />
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="Your Password *" value="" />
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