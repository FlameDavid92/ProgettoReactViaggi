import React from 'react';
import { creaUtenteDef } from '../../utils';

export default function Login() {
    const utente = creaUtenteDef();
    return (<>
        <div className="row">

            <div class="col-12 login-form-1">
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
                    <div class="form-group">
                        <a href="#" class="ForgetPwd">Forget Password?</a>
                    </div>
                </form>
            </div>
        </div>
    </>)
}