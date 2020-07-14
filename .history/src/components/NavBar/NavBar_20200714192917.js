import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './navbar.css';

export default function NavBar({ navlinks }) {
    return (<>
        <nav className="navbar sticky-top navbar-expand navbar-light bg-light align-items-center">
            <a className="navbar-brand" href="#">Navbar</a>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    
                    {navlinks.map((link, i) => {
                        return (
                            <li key={i} className="nav-item">
                                <NavLink className="nav-link" key={i + 1} 
                                to={"/#" + link.id}><span className="tiny-text">{link.nome}</span></NavLink>
                            </li>
                        )
                    })}
                </ul>
                <button className="btn btn-outline-danger my-2 my-sm-0">Logout</button>
            </div>
        </nav>
        {/*
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
            </div>*/}</>
    )
}