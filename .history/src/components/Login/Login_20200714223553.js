import React,{useEffect} from 'react';
import { creaUtenteDef } from '../../utils';
import './login.css';

export default function Login() {
    let utente = null;

    useEffect(() => {
        utente = creaUtenteDef();
    }, []);
    const checkLogin = (ev) => {
        ev.preventDefault();
        console.log(utente);
        console.log(ev.currentTarget.email.value);
        if(ev.currentTarget.email.value === utente.email && ev.currentTarget.password.value === utente.password){
            console.log("ok");
        }
    }
    return (<>
    <div className="container login-container">
        <div className="row">
            <div className="col-8 offset-2 login-form-1">
                <form className="text-center" onSubmit={checkLogin}>
                    <img className="big-logo" alt="logo" src="./logo.png"/>
                    <div className="form-group">
                        <input name="email" type="text" className="form-control" placeholder="Email *" required/>
                    </div>
                    <div className="form-group">
                        <input name="password" type="password" className="form-control" placeholder="Password *" required/>
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