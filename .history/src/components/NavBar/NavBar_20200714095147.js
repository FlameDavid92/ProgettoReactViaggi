import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './navbar.css';

export default function NavBar({ navlinks }) {
    return (
        <div className="container-fluid my-nav">
            <div className="row mr-0 ml-0 w-100 justify-content-center">
                {navlinks.map((link, i) => {
                    return (
                        <div key={i} className="col-3 p-1">
                            <NavLink className="btn btn-sm btn-primary w-100 px-1" 
                            key={i + 1} to={"/#" + link.id}><span className="tiny-text">{link.nome}</span></NavLink>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}