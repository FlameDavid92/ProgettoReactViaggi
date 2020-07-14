import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './navbar.css';

export default function NavBar({ navlinks }) {
    return (<>
        <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
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