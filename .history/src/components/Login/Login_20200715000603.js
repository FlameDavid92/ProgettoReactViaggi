import React,{useState} from 'react';
import { creaUtenteDef } from '../../utils';
import './login.css';

export default function Login() {
    const utente = creaUtenteDef();
    const[noval,setNoval] = useState(false);
    const checkLogin = (ev) => {
        ev.preventDefault();
        if(ev.currentTarget.email.value === utente.email && ev.currentTarget.password.value === utente.hash){
            window.sessionStorage.setItem('user',JSON.stringify(utente));
            window.location.href = "/";
        }else{
            setNoval(true)
            ev.currentTarget.reset();
        }
    }
    return (<>
    <div className="container login-container">
        <div className="row">
            <div className="col-8 offset-2 login-form-1">
                <form className="text-center" onSubmit={checkLogin}>
                    <img className="big-logo" alt="logo" src="./logo.png"/>
                    <div className="form-group mycolor-red">
                        {(noval) ? "Email o Password errati!" : ""}
                    </div>
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