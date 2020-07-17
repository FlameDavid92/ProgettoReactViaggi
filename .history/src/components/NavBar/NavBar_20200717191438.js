import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './navbar.css';

export default function NavBar({ navlinks, currentHover }) {
    const logout = () => {
        window.sessionStorage.removeItem('user');
        window.location.href = "/";
    }
    return (
        <nav className="navbar sticky-top navbar-expand navbar-light my-nav">
            <div className="collapse navbar-collapse">
                <div className="container-fluid">
                <div className="navbar-brand w-50 navlogo2"/>
                <ul className="navbar-nav mr-auto">
                    {navlinks.map((link, i) => {
                        return (
                            <li key={i} className="nav-item">
                                <NavLink className="nav-link" key={i + 1}
                                    to={"/#" + link.id}><span className={"tiny-text link-hover " + ((currentHover == link.id) ? 'mycolor-red' : '')}>{link.nome}</span></NavLink>
                            </li>
                        )
                    })}
                </ul>
                <button onClick={logout} className="btn btn-sm btn-outline-danger my-2">Logout</button>
                </div>
            </div>
        </nav>
    )
}