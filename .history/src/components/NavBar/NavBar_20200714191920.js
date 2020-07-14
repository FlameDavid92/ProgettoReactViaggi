import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './navbar.css';

export default function NavBar({ navlinks }) {
    return (<>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
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