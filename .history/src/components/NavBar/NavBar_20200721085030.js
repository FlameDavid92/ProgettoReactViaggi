import React,{useState,useEffect} from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { useHistory } from "react-router-dom";
import './navbar.css';

export default function NavBar({ navlinks, vizSensor }) {
    const [currentLink,setCurrentLink] = useState("");
    const history = useHistory();
    const logout = () => {
        window.sessionStorage.removeItem('user');
        history.go("/");
    }

    useEffect(() => {
        if(vizSensor.header) {setCurrentLink(''); history.hash='';}
        else{ 
            if(vizSensor.mappa) {setCurrentLink('mappa'); history.hash='mappa';}
            else{
                if(vizSensor.referente) {setCurrentLink('referente'); history.hash='referente';}
                else{
                    if(vizSensor.viaggio) {setCurrentLink('viaggio'); history.hash='viaggio';}
                    else{
                        if(vizSensor.info) {setCurrentLink('info'); history.hash='info';}
                    }
                }
            } 
        }
    }, [vizSensor]);

    return (
        <nav className="navbar sticky-top navbar-expand navbar-light my-nav">
            <div className="collapse navbar-collapse">
                <div className="container-fluid">
                <img className="m-0 p-0 navlogo" alt="logo" />
                <ul className="navbar-nav mr-auto">
                    {navlinks.map((link, i) => {
                        return (
                            <li key={"link-"+i} className="nav-item">
                                <NavLink className="nav-link" key={i + 1}
                                    to={"/#" + link.id}><span className={"font-link link-hover " + ((currentLink === link.id) ? 'mycolor-red' : '')}>{link.nome}</span></NavLink>
                            </li>
                        )
                    })}
                </ul>
                <button onClick={logout} className="btn btn-sm btn-outline-danger logout-btn">Logout</button>
                </div>
            </div>
        </nav>
    )
}