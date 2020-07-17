import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './navbar.css';

export default function NavBar({ navlinks, currentHover }) {
    const logout = () => {
        window.sessionStorage.removeItem('user');
        window.location.href = "/";
    }
    return (
        <nav className="navbar sticky-top nav nav-pills flex-column flex-sm-row">
            <div className="collapse navbar-collapse">
                <img className="navbar-brand logo m-0 p-0" src="./logo.png" alt="logo" />
                <ul className="navbar-nav mr-auto">
                    {navlinks.map((link, i) => {
                        return (
                            <li key={i} className="nav-item flex-sm-fill text-sm-center">
                                <NavLink className="nav-link" key={i + 1}
                                    to={"/#" + link.id}><span className={"tiny-text link-hover " + ((currentHover == link.id) ? 'mycolor-red' : '')}>{link.nome}</span></NavLink>
                            </li>
                        )
                    })}
                </ul>
                <button onClick={logout} className="btn btn-sm btn-outline-danger my-2">Logout</button>
            </div>
        </nav>
    )
}