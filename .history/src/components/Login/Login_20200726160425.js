import React, { useState } from 'react';
import './login.css';
import { useHistory } from "react-router-dom";
var sha512 = require('js-sha512');



export default function Login() {
    //ti fa loggare se matchi nel session storage
    //const utente = creaUtenteDef();
    const [noval, setNoval] = useState(false);
    const history = useHistory();
    const checkLogin = async (ev) => {
        ev.preventDefault();
        const clPassword = ev.target.password.value;
        const clEmail = ev.target.email.value;
        const dbSalt = await postData("http://treeact.altervista.org/richiestasalt1357986420.php", { email: `${clEmail}` });
        if (dbSalt.errore) { //se è presente la chiave errore (quindi non è undefined) vuol dire che nel db non è presente l'utente con l'email richiesta.
            setNoval(true);
        } else {
            const hashToCheck = sha512(clPassword + dbSalt.salt);
            const jsonino = await postData("http://treeact.altervista.org/checklogin45672819563.php", { email: `${clEmail}`, hashcode: `${hashToCheck}` });
            console.log(jsonino);
            /*
            if (ev.currentTarget.email.value === utente.email && sha512(ev.currentTarget.password.value + utente.salt) === utente.hash) {
                window.sessionStorage.setItem('user', JSON.stringify(utente));
                history.go("/");
            } else {
                setNoval(true)
                ev.currentTarget.reset();
            }*/
        }
    }

    async function postData(url = '', data = {}) {
        var fd = new FormData();
        for (var i in data) {
            fd.append(i, data[i]);
        }
        const response = await fetch(url, {
            method: 'POST',
            body: fd
        });
        return response.json();
    }
    return (<>
        <div className="container login-container">
            <div className="row">
                <div className="col-8 offset-2 login-form-1">
                    <form className="text-center" onSubmit={checkLogin}>
                        <img className="login-logo" alt="logo" src="./logo.png" />
                        <div className="form-group mycolor-red">
                            {(noval) ? "Email o Password errati!" : ""}
                        </div>
                        <div className="form-group">
                            <input name="email" type="text" className="form-control" placeholder="Email *" required />
                        </div>
                        <div className="form-group">
                            <input name="password" minLength="8" type="password" className="form-control" placeholder="Password *" required />
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